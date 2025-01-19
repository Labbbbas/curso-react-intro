import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

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

            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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