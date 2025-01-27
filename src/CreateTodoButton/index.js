import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        openCreateModal,
        setOpenCreateModal,
        loading,
    } = React.useContext(TodoContext);

    return (
        loading
            ? null
            : <button
                className='CreateTodoButton'
                onClick={() => {
                    setOpenCreateModal(!openCreateModal);
                }}
            >+</button>
    );
}

export { CreateTodoButton };