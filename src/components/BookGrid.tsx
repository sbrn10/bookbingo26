import classes from "../css/grid.module.css";
import Book from "./Book";
import bingoContext from "../store/bingoContext";
import { useContext } from "react";
import BookDetails from "./BookDetails";
import Modal from "./UI/Modal";
import AddEmojiPicker from "./UI/AddEmojiPicker";

export default function BookGrid() {
  const ctx = useContext(bingoContext);

  return (
    <>
      <div className={classes.container}>
        <h2>
          <a href="https://2026-book-bingo.tumblr.com">@2026-book-bingo</a> from
          @batmanisagatewaydrug
        </h2>
        <div className={classes.grid}>
          {Array.from(Array(25)).map((_, index) => (
            <Book
              key={index}
              index={index}
              array={ctx.bookList}
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
          ></BookDetails>
        </Modal>
      )}
      {ctx.showEmojiPicker && <AddEmojiPicker />}
    </>
  );
}
