import { createContext, type Dispatch, type SetStateAction } from "react";

export type BookType = {
  title: string;
  author: string;
  readStatus: number;
  image: string;
  emoji: string[];
  desc: string;
};

export type ContextType = {
  bingoCategories: string[];
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  bookList: BookType[];
  showModalIndex: number;
  setShowModalIndex: Dispatch<SetStateAction<number>>;
  isEditable: boolean;
  setIsEditable: Dispatch<SetStateAction<boolean>>;
};

export const bingoContext = createContext<ContextType>({} as ContextType);

export default bingoContext;
