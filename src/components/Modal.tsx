import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

export type ModalRefType = {
  open: () => void;
};

const Modal = forwardRef<ModalRefType, { children: React.ReactNode }>(
  function Modal({ children }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open() {
        dialogRef.current?.showModal();
      },
    }));

    return createPortal(
      <dialog
        ref={dialogRef}
        className="backdrop:bg-stone-900/85 m-auto p-4 rounded-xl"
      >
        {children}
        <form method="dialog" className="text-right mt-8">
          <Button>Close</Button>
        </form>
      </dialog>,
      document.getElementById("modal-root")!,
    );
  },
);

export default Modal;
