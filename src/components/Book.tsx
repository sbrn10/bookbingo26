import { useContext } from "react";
import bingoContext, { type BookType } from "../store/bingoContext";
import classes from "../css/grid.module.css";
import { useState } from "react";
import "../css/overlay.css";

interface BookProps {
  index: number;
  key: number;
  array: BookType[];
  isEditable: boolean;
}

export default function Book({ index, array, isEditable }: BookProps) {
  const ctx = useContext(bingoContext);
  const card = array[index];
  const colors = ["#0000", "rgba(150, 183, 160, 1)", "rgb(82, 131, 255)"];

  const [bgColor, setBgColor] = useState(colors[card.readStatus]);

  const [canToggleColor, setCanToggleColor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleEdit() {
    if (!isEditable && !card.readStatus) return;

    ctx.setShowModalIndex(index);
    ctx.setShowModal(true);
  }

  function handleToggleColor() {
    if (!isEditable) {
      if (!card.readStatus) return;

      ctx.setShowModalIndex(index);
      ctx.setShowModal(true);
      return;
    }

    if (!canToggleColor) return;

    let tempindex = card.readStatus + 1;
    tempindex = tempindex >= 3 ? 0 : tempindex;
    setBgColor(colors[tempindex]);
    ctx.updateReadStatus(index);
  }

  function handleShowEmoji() {
    if (!isEditable) return;
    ctx.setShowModalIndex(index);
    ctx.setShowEmojiPicker(true);
  }

  function handleDeleteEmoji(emoji: string) {
    if (!isEditable) return;
    ctx.deleteEmoji(index, emoji);
    setCanToggleColor(true);
  }

  function populateEmojis(emoji: string, index: number) {
    return (
      <img
        src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji}.png`}
        key={`${emoji}${index}`}
        style={{ width: "18px" }}
        onClick={() => {
          handleDeleteEmoji(emoji);
        }}
        onMouseEnter={handleHoverOnDisableToggle}
        onMouseLeave={handleHoverOffDisableToggle}
      ></img>
    );
  }

  // hover functions
  function handleHoverOff() {
    if (!isEditable) return;
    setIsHovered(false);
  }
  function handleHoverOn() {
    if (!isEditable) return;
    setIsHovered(true);
    setCanToggleColor(true);
  }
  function handleHoverOnDisableToggle() {
    if (!isEditable) return;
    setCanToggleColor(false);
  }
  function handleHoverOffDisableToggle() {
    if (!isEditable) return;
    setCanToggleColor(true);
  }

  return (
    <>
      <div
        id={`card${index}`}
        className={classes.book}
        style={{ backgroundColor: bgColor }}
        onClick={handleToggleColor}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
      >
        <img
          className={classes.bookCover}
          src={
            card.image
              ? card.image
              : "https://placehold.co/75x75/transparent/transparent"
          }
          title={card.title ? `${card.title} by ${card.author}` : ""}
        ></img>
        <span style={{ fontSize: "0.8em" }}>
          {index + 1}. {ctx.bingoCategories[index]}
        </span>
        {isEditable && (
          <>
            <div className={"overlay right" + (isHovered ? " is-open" : "")}>
              <button
                title="Edit"
                aria-label="Edit"
                onClick={handleEdit}
                onMouseEnter={handleHoverOnDisableToggle}
                onMouseLeave={handleHoverOffDisableToggle}
              >
                <span className="material-symbols-rounded">edit_square</span>
              </button>
            </div>
            <div className={"overlay left" + (isHovered ? " is-open" : "")}>
              <button
                title="Emoji"
                aria-label="Emoji"
                onClick={handleShowEmoji}
                onMouseEnter={handleHoverOnDisableToggle}
                onMouseLeave={handleHoverOffDisableToggle}
              >
                <span className="material-symbols-rounded">add_reaction</span>
              </button>
            </div>
          </>
        )}
        <div className="overlay right bottom is-open">
          {card.emoji.map(populateEmojis)}
        </div>
      </div>
    </>
  );
}
