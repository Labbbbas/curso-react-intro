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

    // Estado del modal del create
    const [openCreateModal, setOpenCreateModal] = React.useState(false);

    // Estado del modal del edit
    const [openEditModal, setOpenEditModal] = React.useState(false);

    // Estado del valor del ToDo a editar
    const [currentEditTodo, setCurrentEditTodo] = React.useState('');

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

    const addTodo = (text) => {
        if (text.trim().length === 0) {
            alert('No se puede agregar un ToDo vacío');
        }
        else {
            const newTodos = [...todos];
            const existentTodo = newTodos.find((todo) => todo.text === text)
            if (existentTodo) {
                alert('Ese ToDo ya existe');
            }
            else {
                newTodos.push({
                    text,
                    completed: false
                })
                saveTodos(newTodos);
            }
        }
    }

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

    const editTodo = (originalText, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === originalText);
        newTodos[todoIndex].text = newText;
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
            deleteTodo,
            editTodo,
            openEditModal,
            setOpenEditModal,
            openCreateModal,
            setOpenCreateModal,
            addTodo,
            currentEditTodo,
            setCurrentEditTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };