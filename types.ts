export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type PreToken = {
  words: string;
  id: number;
};

export type PostToken = {
  word: string[];
  id: number;
};
