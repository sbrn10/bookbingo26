import { createContext, type Dispatch, type SetStateAction } from "react";

export type BookType = {
  title: string;
  author: string;
  readStatus: number;
  emoji: string[];
};

export type ContextType = {
  bingoCategories: string[];
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  bookList: BookType[];
};

export const bingoContext = createContext<ContextType>({} as ContextType);

export default bingoContext;
