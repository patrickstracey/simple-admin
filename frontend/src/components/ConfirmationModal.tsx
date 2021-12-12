import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel}></div>;
};

const Modal = (props) => {
  return (
    <div className="confirmation-modal">
      <h2>Confirm Delete?</h2>
      <div>
        <p>Are you sure you want to delete this item?</p>
        <p>I hope you know what you are doing...</p>
      </div>

      <div className="confirm-btns">
        <button className="delete" onClick={props.onConfirm}>
          Delete
        </button>
        <button className="cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const ConfirmationModal: React.FC<{ onCancel: any; onConfirm: any }> = (
  props
) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal onConfirm={props.onConfirm} onCancel={props.onCancel} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ConfirmationModal;
