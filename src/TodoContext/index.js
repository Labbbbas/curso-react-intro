import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // Le pasamos el localStorage que queremos modificar y su valor inicial
    // Aquí ya podemos poner nombres acordes. En lugar de item, le ponemos ToDos
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    // La !! es para remarcar que queremos valores verdaderos, si la quitamos no pasa nada
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    );

    // Hacemos una copia de los todos, los modificamos de ser el caso, y los enviamos al setTodos
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        if (newTodos[todoIndex].completed === false) {
            newTodos[todoIndex].completed = true;
        }
        else {
            newTodos[todoIndex].completed = false;
        }
        // Llamamos al actualizador del estado y del localStorage
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        // Llamamos al actualizador del estado y del localStorage
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };