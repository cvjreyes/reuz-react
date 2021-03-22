import { React } from "react";
import './Modal.css';
import CloseButton from "../../assets/close.svg"
const Modal = ({ visibility, setVisibility, content }) => {

  const showHideClassName = visibility ? "modal display-block" : "modal display-none";

  const handleClose = () => {
    setVisibility(false)
  }

  return (
    <div className={showHideClassName}>
      <section className="modal__main">
        <div className="close_button_container">
          <img src={CloseButton} onClick={handleClose} />
        </div>
        {content}
      </section>
    </div>
  );
}

export default Modal