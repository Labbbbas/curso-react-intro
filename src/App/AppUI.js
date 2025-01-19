import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';

function AppUI() {
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

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => ( // Encapsulamos en una Render Function
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />

        </>
    );
}

export { AppUI };