import { useState } from "react";
import bingoContext, { type ContextType, type BookType } from "./bingoContext";
// import { bookData } from "./bookData.js";
import type { PropsWithChildren } from "react";
import jsonData from "./bookData.json";

export default function CtxProvider({ children }: PropsWithChildren) {
  let initialBookList: string | BookType[] | null =
    localStorage.getItem("bookList");
  if (initialBookList) {
    initialBookList = JSON.parse(initialBookList) as BookType[];
  } else {
    // initialBookList = bookData as BookType[];
    initialBookList = jsonData as BookType[];

    // initialBookList = Array(25).fill({
    //   title: "",
    //   author: "",
    //   image: "",
    //   readStatus: 0,
    //   emoji: [],
    //   desc: "",
    // });
  }
  const bingoCategories: string[] = [
    "short story collection",
    "micro history",
    "librarian / bookseller rec'd",
    "non-Euro fantasy",
    "MC isn't human",
    "2025 award winner",
    "indie pub or self pub",
    "college or uni setting",
    "literary fiction",
    "blurb buddies",
    "book about music",
    "not originally published in English",
    "pink cover",
    "read + play a TTRPG",
    "2x older than you",
    "historical fantasy",
    "2026 debut author",
    "challenged or banned",
    "cultural nonfiction",
    "gothic fiction",
    "read it + do it",
    "science fiction",
    "manga, comic, or graphic novel",
    "romance novel",
    "writer bio or memoir",
  ];

  const [bookList, setBookList] = useState(initialBookList);

  const [showModal, setShowModal] = useState(false);

  const [showModalIndex, setShowModalIndex] = useState(0);

  const [isEditable, setIsEditable] = useState(true);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function updateReadStatus(index: number) {
    const oldBook = bookList[index];
    const newBook = {
      ...oldBook,
      readStatus: oldBook.readStatus >= 2 ? 0 : oldBook.readStatus + 1,
    };
    updateBookList(index, newBook);
  }

  function updateBookList(index: number, newBook: BookType) {
    const newList = bookList.toSpliced(index, 1, newBook);
    setBookList(newList);
  }

  function addEmoji(index: number, emoji: string) {
    const oldBook = bookList[index];
    const newEmojiList = [...oldBook.emoji, emoji];
    const newBook = {
      ...oldBook,
      emoji: newEmojiList,
    };
    updateBookList(index, newBook);
  }

  function deleteEmoji(index: number, emoji: string) {
    const oldBook = bookList[index];
    const newEmojiList = oldBook.emoji.filter((item) => item != emoji);
    const newBook = {
      ...oldBook,
      emoji: newEmojiList,
    };
    updateBookList(index, newBook);
  }

  const ctxValue: ContextType = {
    bingoCategories,
    showModal,
    setShowModal,
    bookList,
    showModalIndex,
    setShowModalIndex,
    isEditable,
    setIsEditable,
    showEmojiPicker,
    setShowEmojiPicker,
    updateReadStatus,
    updateBookList,
    addEmoji,
    deleteEmoji,
  };

  return (
    <bingoContext.Provider value={ctxValue}>{children}</bingoContext.Provider>
  );
}
