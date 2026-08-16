import { useContext } from "react";
import { createPortal } from "react-dom";
import bingoContext from "../../store/bingoContext";

import classes from "../../css/modal.module.css";

import { type PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  const ctx = useContext(bingoContext);

  function defaultCancel() {
    ctx.setShowModal(false);
  }

  return createPortal(
    <>
      {/* backdrop div - cancel */}
      <div className={classes.backdrop} onClick={defaultCancel} />
      {/* container for actual thing */}
      <dialog className={classes.modal}>{children}</dialog>
    </>,
    document.getElementById("modal")!,
  );
}
