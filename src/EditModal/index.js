import React from "react";
import ReactDOM from "react-dom";
import './EditModal.css'

function EditModal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal-Background">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { EditModal };