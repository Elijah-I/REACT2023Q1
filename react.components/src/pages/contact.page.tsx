import React from 'react';
import {
  Form,
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
  ActionFunctionArgs,
} from 'react-router-dom';

import type { ActionParams, LoaderParams, LoaderReturnOne } from 'types/contact.types';

import { getContact, updateContact } from 'model/contacts';

interface FavoriteProps extends LoaderReturnOne {}

const ContactPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

function Favorite({ contact }: FavoriteProps) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}

export const loader = async ({ params }: LoaderFunctionArgs): Promise<LoaderReturnOne> => {
  const { contactId } = params as unknown as LoaderParams;
  const contact = await getContact(contactId);

  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Contact not found',
    });
  }

  return { contact };
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { contactId } = params as unknown as ActionParams;
  const formData = await request.formData();

  const contact = await updateContact(contactId, {
    favorite: formData.get('favorite') === 'true',
  });

  return { contact };
};

export default ContactPage;
