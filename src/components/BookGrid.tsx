import classes from "../css/grid.module.css";
import Book from "./Book";
import bingoContext from "../store/bingoContext";
import { useContext } from "react";
import BookDetails from "./BookDetails";
import Modal from "./UI/Modal";

export default function BookGrid() {
  const ctx = useContext(bingoContext);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index} index={index}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 5} index={index + 5}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 10} index={index + 10}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 15} index={index + 15}></Book>
          ))}
        </div>

        <div className={classes.row}>
          {Array.from(Array(5)).map((_, index) => (
            <Book key={index + 20} index={index + 20}></Book>
          ))}
        </div>
      </div>
      {ctx.showModal && (
        <Modal>
          <BookDetails index={ctx.showModalIndex}></BookDetails>
        </Modal>
      )}
    </>
  );
}
