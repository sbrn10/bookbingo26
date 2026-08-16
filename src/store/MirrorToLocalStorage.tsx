import { useEffect, useContext } from "react";
import { bingoContext } from "./bingoContext";

export default function MirrorToLocalStorage() {
  const ctx = useContext(bingoContext);
  const bookList = ctx.bookList;

  useEffect(() => {
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }, [bookList]);

  return <></>;
}
