import { React } from "react";
import './Modal.css';

const Modal = ({ visible, content }) => {

    const showHideClassName = visible ? "modal display-block" : "modal display-none";

    return (
    <div className={showHideClassName}>
      <section className="modal__main">
        {content}
      </section>
    </div>
  );
}

export default Modal