import classes from "../css/grid.module.css";
import Book from "./Book";
import bingoContext from "../store/bingoContext";
import { useContext } from "react";
import BookDetails from "./BookDetails";
import Modal from "./UI/Modal";
import AddEmojiPicker from "./UI/AddEmojiPicker";
import bookData from "../store/bookData.json";
import { type BookType } from "../store/bingoContext";

export default function BookGrid() {
  const ctx = useContext(bingoContext);

  const bookList: BookType[] = ctx.isEditable ? ctx.bookList : bookData;

  return (
    <>
      <div className={classes.container}>
        <span style={{ fontSize: "0.5em" }}>
          Shh, graphic design is not my passion
        </span>
        <div className={classes.buttons}>
          <button onClick={() => ctx.setIsEditable(true)}>Make Your Own</button>
          <button onClick={() => ctx.setIsEditable(false)}>Mine</button>
        </div>
        <h2>
          <a href="https://2026-book-bingo.tumblr.com">@2026-book-bingo</a> from
          @batmanisagatewaydrug
        </h2>
        <div className={classes.grid}>
          {Array.from(Array(25)).map((_, index) => (
            <Book
              key={index}
              index={index}
              array={bookList}
              isEditable={ctx.isEditable}
            ></Book>
          ))}
        </div>
      </div>

      {ctx.showModal && (
        <Modal>
          <BookDetails
            index={ctx.showModalIndex}
            isEditable={ctx.isEditable}
            array={bookList}
          ></BookDetails>
        </Modal>
      )}
      {ctx.showEmojiPicker && <AddEmojiPicker />}
    </>
  );
}
