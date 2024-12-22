import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla',completed: true },
  { text: 'Completar el curso de react de platzi',completed: false },
  { text: 'LALALALA',completed: false },
  { text: 'Ir a six flags',completed: false }
];

function App() {
  // Los estados tienen que estar en el componente padre (aquí en App) para poder comunicarse con los hijos
  // No se puede comunicar de hijos a padres

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const [todos, setTodos] = React.useState(defaultTodos);

  // La !! es para remarcar que queremos valores verdaderos, si la quitamos no pasa nada
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText)
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />

      <TodoSearch 
        // Enviamos la variable y el actualizador como prop, se pueden llamar igual
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>

        { searchedTodos.map(todo => (
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

export default App;
