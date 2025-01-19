import './TodoCounter.css';
import { FaFlagCheckered } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoCounter() {
    const {
        loading: isLoading,
        completedTodos: completed,
        totalTodos: total,
    } = React.useContext(TodoContext);

    return (
        isLoading
            ? <h1 className='TodoCounter'> Bienvenido <FaHandPeace /> </h1>
            : (
                total === completed
                    ? (
                        total !== 0
                            ? <h1 className='TodoCounter'> <FaFlagCheckered /> Has completado todos los ToDos <FaFlagCheckered /> </h1>
                            : <h1 className='TodoCounter'> Aún no tienes ToDos </h1>
                    )
                    : <h1 className='TodoCounter'> Has completado <span>{completed}</span> de <span>{total}</span> ToDos </h1>
            )
    );
}

export { TodoCounter };