import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        openCreateModal,
        setOpenCreateModal
    } = React.useContext(TodoContext);

    return (
        <button
            className='CreateTodoButton'
            onClick={() => {
                setOpenCreateModal(!openCreateModal);
            }}
        >+</button>
    );
}

export { CreateTodoButton };