import React from "react";
import ReactDOM from "react-dom";
import './CreateModal.css'

function CreateModal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal-Background">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { CreateModal };