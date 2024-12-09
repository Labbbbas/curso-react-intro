import { TodoCounter } from './TodoCounter';
import './App.css';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla',completed: true },
  { text: 'Completar el curso de react de platzi',completed: false },
  { text: 'Llorar con la llorona',completed: false },
  { text: 'LALALALA',completed: false }
]

function App() {
  return (
    <React.Fragment>

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

    </React.Fragment>
  );
}




export default App;
