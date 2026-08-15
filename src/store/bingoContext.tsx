import {
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export type ContextType = {
  bingoCategories: string[];
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const bingoContext = createContext<ContextType>({} as ContextType);

export default bingoContext;
