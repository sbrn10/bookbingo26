import classes from "../css/modal.module.css";
import bingoContext from "../store/bingoContext";
import { useContext } from "react";

interface BookDetailsProps {
  index?: number;
}

export default function BookDetails({ index }: BookDetailsProps) {
  const ctx = useContext(bingoContext);
  const card = ctx.bookList[index];

  return (
    <>
      <form>
        <div className={classes.displayBlock}>
          <label htmlFor="title">Title: </label>
          <span>{card.title}</span>
        </div>

        <div className={classes.displayBlock}>
          <label htmlFor="author">Author: </label>
          <span>{card.author}</span>
        </div>

        <div className={classes.inputBlock}>
          <label>Cover Image: </label>
          <img
            src={card.image ? card.image : "https://placehold.co/75x75/ccc/ccc"}
          ></img>
        </div>
      </form>
    </>
  );
}
