import React, { useEffect, useRef } from "react";
import './EditTodoForm.css'
import { TodoContext } from "../TodoContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditTodoForm() {
    const {
        setOpenEditModal,
        editTodo,
        currentEditTodo
    } = React.useContext(TodoContext);

    // Estado del valor del ToDo
    const [newTodoValue, setNewTodoValue] = React.useState(currentEditTodo);

    // Referencia al textarea para manipular el foco
    const textareaRef = useRef(null);

    // Al abrir el modal, movemos el foco al final del texto
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.selectionStart = newTodoValue.length;
            textareaRef.current.focus();
        }
    }, [newTodoValue]);

    const onSubmit = (event) => {
        event.preventDefault();
        editTodo(currentEditTodo, newTodoValue.trim());
    }

    const onCancel = () => {
        setOpenEditModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <>        <form onSubmit={onSubmit}>
            <label>Edita tu ToDo</label>
            <textarea
                placeholder="..."
                defaultValue={newTodoValue}
                onChange={onChange}
                autoFocus
                required
                ref={textareaRef}  // Añadido ref
            />

            <div className="EditTodoForm-buttonContainer">
                <button
                    type="button"
                    className="EditTodoForm-button EditTodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="EditTodoForm-button EditTodoForm-button--add"
                    onClick={onSubmit}
                >Guardar</button>
            </div>
        </form>

            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
        </>
    )
}

export { EditTodoForm };