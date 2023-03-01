import React from 'react';
import {
  Form,
  useLoaderData,
  LoaderFunctionArgs,
  ActionFunctionArgs,
  redirect,
  useNavigate,
} from 'react-router-dom';

import type { ActionParams, LoaderParams, LoaderReturnOne } from 'types/contact.types';

import { getContact, updateContact } from 'model/contacts';
import ROUTES from 'types/routes.types';

const EditPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input type="text" name="twitter" placeholder="@jack" defaultValue={contact.twitter} />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </p>
    </Form>
  );
};

export const loader = async ({ params }: LoaderFunctionArgs): Promise<LoaderReturnOne> => {
  const { contactId } = params as unknown as LoaderParams;
  const contact = await getContact(contactId);
  return { contact };
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { contactId } = params as unknown as ActionParams;
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);
  await updateContact(contactId, updates);

  return redirect(`/${ROUTES.CONTACTS}/${contactId}`);
};

export default EditPage;
