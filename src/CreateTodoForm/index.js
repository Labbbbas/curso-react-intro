import React from "react";
import './CreateTodoForm.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TodoContext } from "../TodoContext";

function CreateTodoForm() {
    const {
        setOpenCreateModal,
        addTodo
    } = React.useContext(TodoContext);

    // Estado local para el nuevo ToDo
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue.trim());
    }

    const onCancel = () => {
        setOpenCreateModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <label>Crea tu nuevo ToDo</label>
            <textarea 
                placeholder="..."
                value={newTodoValue}
                onChange={onChange}
                autoFocus
                required
            />
            <div className="CreateTodoForm-buttonContainer">
                <button
                    type="button"
                    className="CreateTodoForm-button CreateTodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="CreateTodoForm-button CreateTodoForm-button--add"
                    onClick={onSubmit}
                >Añadir</button>
            </div>
        </form>

        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true}/>
        </>
    )
}

export { CreateTodoForm };