import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoNotFound } from '../TodoNotFound';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        openModal,
    } = React.useContext(TodoContext)

    // console.log(typeof totalTodos, totalTodos); // Es un number
    // console.log(typeof searchedTodos, searchedTodos); // Es un object

    return (
        <>

            <TodoCounter
            // completed={completedTodos}
            // total={totalTodos}
            // isLoading={loading}
            />

            <TodoSearch
            // // Enviamos la variable y el actualizador como prop, se pueden llamar igual
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && totalTodos === 0) && <EmptyTodos />}
                {(!loading && searchedTodos.length === 0 && totalTodos > 0) && <TodoNotFound />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)} // Cuando te completes, te enviamos un actualizador del estado
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}

            </ TodoList >

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };