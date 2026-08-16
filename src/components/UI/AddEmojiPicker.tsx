import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { createPortal } from "react-dom";
import { bingoContext } from "../../store/bingoContext";
import { useContext } from "react";

import classes from "../../css/emojiPicker.module.css";

export default function AddEmojiPicker() {
  const ctx = useContext(bingoContext);

  function handleClick(
    emoji: EmojiClickData,
    _event: MouseEvent,
    { collapseToReactions },
  ) {
    ctx.addEmoji(ctx.showModalIndex, emoji.unified);
    ctx.setShowEmojiPicker(false);
    collapseToReactions();
  }

  function defaultCancel() {
    ctx.setShowEmojiPicker(false);
  }

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={defaultCancel} />
      <div className={classes.container}>
        <EmojiPicker
          reactions={["1f44d", "2764-fe0f", "1f44e", "1f621", "1f480"]}
          onEmojiClick={handleClick}
          reactionsDefaultOpen={true}
          style={{ scale: 0.75 }}
        />
      </div>
    </>,
    document.getElementById(`card${ctx.showModalIndex}`),
  );
  // return (<div>
  //     <EmojiPicker
  //         reactions={["1f44d", "2764-fe0f", "1f44e", "1f621", "1f480"]}
  //         onEmojiClick={handleClick}
  //         reactionsDefaultOpen={true}
  //         style={{ scale: 0.75 }} />
  // </div>);
}
