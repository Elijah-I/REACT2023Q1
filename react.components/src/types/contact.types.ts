interface Contact {
  createdAt: number;
  id: string;
  first: string;
  last: string;
  favorite: boolean;
  avatar: string;
  twitter: string;
  notes: string;
}

export interface LoaderParams {
  contactId: Contact['id'];
}

export interface LoaderReturnOne {
  contact: Contact;
}

export interface LoaderReturnMultiple {
  contacts: Contact[];
}

export interface LoaderReturnMultipleWithQ extends LoaderReturnMultiple {
  q: string;
}

export interface ActionParams extends LoaderParams {}
