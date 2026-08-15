import { useContext } from "react";
import bingoContext from "../store/bingoContext";

interface BookProps {
  index: number;
  key: number;
}

export default function Book({ index }: BookProps) {
  const ctx = useContext(bingoContext);
  const card = ctx.bookList[index];

  function handleCardClick() {
    console.log("click");
  }

  return (
    <>
      <div
        id={`card${index}`}
        style={{
          width: 125,
          minHeight: 125,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "aliceblue",
          padding: "3px",
          gap: "2px",
          position: "relative",
        }}
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
      </div>
    </>
  );
}
