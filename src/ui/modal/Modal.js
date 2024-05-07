import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import CloseButton from "../icons/CloseButton";
import Overlay from "./Overlay";
import StyledModal from "./StyledModal";
import { selectProduct } from "../../features/products/productSlice";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  const dispatch = useDispatch();

  return (
    <ModalContext.Provider value={{ close, open, openName, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName, prod }) {
  const { open, dispatch } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
      dispatch(selectProduct(prod));
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal>
        <button
          className="absolute right-2 top-1 rounded-sm p-1 transition-all duration-100 hover:scale-105"
          onClick={close}
        >
          <CloseButton height={"32px"} />
        </button>
        <div ref={ref} className="h-full w-full">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
