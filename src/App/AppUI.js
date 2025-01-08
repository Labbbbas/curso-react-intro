import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>

            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
                isLoading={loading}
            />

            <TodoSearch
                // Enviamos la variable y el actualizador como prop, se pueden llamar igual
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            {loading && <p> Cargando... </p>}
            {error && <p> Ocurrió un error! </p>}
            {(!loading && searchedTodos.length === 0) && <p> Crea un nuevo ToDo! </p>}
            <TodoList>

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

        </>
    );
}

export { AppUI };