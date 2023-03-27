export type FormValues = {
  title: string;
  tags: string;
  date: string;
  type: string;
  agreement: string;
  author: string;
  file: FileList;
};

export type FormErrors = {
  [PropertyKey in keyof FormValues]: {
    type: string;
    message: string;
  };
};
