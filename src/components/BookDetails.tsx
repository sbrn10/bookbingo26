import classes from "../css/modal.module.css";
import bingoContext from "../store/bingoContext";
import { useContext, useRef } from "react";

interface BookDetailsProps {
  index?: number;
  isEditable?: boolean;
}

export default function BookDetails({ index, isEditable }: BookDetailsProps) {
  const ctx = useContext(bingoContext);
  const card = ctx.bookList[index];

  const formRef = useRef<null | HTMLFormElement>(null);

  function handleSubmit() {
    formRef.current.submit();
  }
  return (
    <>
      <form ref={formRef}>
        <label htmlFor="title">Title:</label>
        <div className={classes.plainText} hidden={isEditable}>
          {card.title}
        </div>
        <input
          id="title"
          name="title"
          defaultValue={card.title}
          hidden={!isEditable}
        ></input>

        <label htmlFor="author">Author:</label>
        <div className={classes.plainText} hidden={isEditable}>
          {card.author}
        </div>
        <input
          id="author"
          name="author"
          defaultValue={card.author}
          hidden={!isEditable}
        ></input>

        <label>Cover: </label>
        <img
          className={classes.cover}
          src={card.image ? card.image : "https://placehold.co/75x75/ccc/ccc"}
        ></img>

        <label htmlFor="notes" hidden={!isEditable && !card.desc}>
          Notes:
        </label>
        <textarea
          id="notes"
          name="notes"
          hidden={!isEditable}
          defaultValue={card.desc}
        ></textarea>
        <div
          className={classes.plainText}
          hidden={isEditable || (!isEditable && !card.desc)}
        >
          {card.desc}
        </div>
      </form>
      {isEditable && (
        <div className={classes.center}>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button className={classes.delete}>Delete</button>
        </div>
      )}
    </>
  );
}
