import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla',completed: true },
  { text: 'Completar el curso de react de platzi',completed: false },
  { text: 'LALALALA',completed: false },
  { text: 'Ir a six flags',completed: false }
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>

        { defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}

      </ TodoList >

      <CreateTodoButton />

    </>
  );
}

export default App;
