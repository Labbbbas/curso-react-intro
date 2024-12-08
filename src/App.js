import { TodoCounter } from './TodoCounter';
import './App.css';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ TodoList >

      <CreateTodoButton />

    </div>
  );
}




export default App;
