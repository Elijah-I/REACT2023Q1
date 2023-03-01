import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  LoaderFunctionArgs,
  useSubmit,
} from 'react-router-dom';

import type { LoaderReturnMultipleWithQ } from 'types/contact.types';

import { getContacts, createContact } from 'model/contacts';
import ROUTES from 'types/routes.types';

const RootPage = () => {
  const submit = useSubmit();
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const [query, setQuery] = useState(q);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const isFirstSearch = q === '';

    setQuery(e.currentTarget.value);
    submit(e.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              className={searching ? 'loading' : ''}
              value={query}
              onChange={handleSearch}
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  );
};

export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<LoaderReturnMultipleWithQ> => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';

  const contacts = await getContacts(q);
  return { contacts, q };
};

export const action = async () => {
  const contact = await createContact();
  return redirect(`/${ROUTES.CONTACTS}/${contact.id}/edit`);
};

export default RootPage;
