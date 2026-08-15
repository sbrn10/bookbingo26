import { useState } from "react";
import bingoContext, { type ContextType } from "./bingoContext";

export default function CtxProvider({ children }) {
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

  const [showModal, setShowModal] = useState(false);

  const ctxValue: ContextType = {
    bingoCategories,
    showModal,
    setShowModal,
    // bingoCategories: bingoState.bingoCategories,
    // bookList: bingoState.bookList,
    // updateReadStatus,
    // updateBookList,
    // showModal,
    // setShowModal,
    // modalIndex,
    // setModalIndex,
    // emojiIndex,
    // setEmojiIndex,
    // showEmojiPicker,
    // setShowEmojiPicker,
    // addEmojiToCard,
    // deleteEmoji,
  };

  return (
    <bingoContext.Provider value={ctxValue}>{children}</bingoContext.Provider>
  );
}
