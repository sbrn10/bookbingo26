import { useContext } from "react";
import bingoContext from "../store/bingoContext";
import classes from "../css/grid.module.css";

interface BookProps {
  index: number;
  key: number;
}

export default function Book({ index }: BookProps) {
  const ctx = useContext(bingoContext);
  const card = ctx.bookList[index];
  const colors = ["#0000", "rgba(150, 183, 160, 1)", "rgb(82, 131, 255)"];

  const bgColor = colors[card.readStatus >= 3 ? 0 : card.readStatus];

  function handleCardClick() {
    if (!card.readStatus) return;

    ctx.setShowModalIndex(index);
    ctx.setShowModal(true);
  }

  function populateEmojis(emoji: string, index: number) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji}.png`}
        key={`${emoji}${index}`}
        style={{ width: "18px" }}
      ></img>
    );
  }
  return (
    <>
      <div
        className={classes.book}
        style={{ backgroundColor: bgColor }}
        onClick={handleCardClick}
      >
        <img
          style={{ height: 90, objectFit: "contain" }}
          src={
            card.image
              ? card.image
              : "https://placehold.co/75x75/transparent/transparent"
          }
          title={card.title ? `${card.title} by ${card.author}` : ""}
        ></img>
        <span style={{ fontSize: "0.8em", fontFamily: "sans-serif" }}>
          {index + 1}. {ctx.bingoCategories[index]}
        </span>
        <div className={classes.overlay}>{card.emoji.map(populateEmojis)}</div>
      </div>
    </>
  );
}
