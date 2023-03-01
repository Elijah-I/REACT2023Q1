import ROUTES from 'types/routes.types';
import { deleteContact } from 'model/contacts';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { ActionParams } from 'types/contact.types';

export const action = async ({ params }: ActionFunctionArgs) => {
  const { contactId } = params as unknown as ActionParams;
  await deleteContact(contactId);
  return redirect(ROUTES.ROOT);
};
