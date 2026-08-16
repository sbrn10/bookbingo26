import classes from "../css/modal.module.css";
import bingoContext from "../store/bingoContext";
import { useContext } from "react";

interface BookDetailsProps {
  index?: number;
  isEditable?: boolean;
}

export default function BookDetails({ index, isEditable }: BookDetailsProps) {
  const ctx = useContext(bingoContext);
  const card = ctx.bookList[index];

  return (
    <>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          defaultValue={card.title}
          disabled={!isEditable}
        ></input>

        <label htmlFor="author">Author: </label>
        <input
          id="author"
          name="author"
          defaultValue={card.author}
          disabled={!isEditable}
        ></input>

        <label>Cover: </label>
        <img className={classes.cover}
          src={card.image ? card.image : "https://placehold.co/75x75/ccc/ccc"}
        ></img>
      </form>
    </>
  );
}
