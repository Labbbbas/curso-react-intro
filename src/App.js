import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   { text: 'Cortar cebolla',completed: false },
//   { text: 'Completar el curso de react de platzi',completed: false },
//   { text: 'LALALALA',completed: false },
//   { text: 'Ir a six flags',completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  // Los estados tienen que estar en el componente padre (aquí en App) para poder comunicarse con los hijos
  // No se puede comunicar de hijos a padres

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  // NOTA IMPORTANTE: Para guardar algo en localStorage tenemos que "stringifiarlo"
  // Y para leer algo del localStorage tenemos que "parsearlo"
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  let parsedTodos;

  if (!localStorageTodos) {
    // Guardamos el localStorage
    localStorage.setItem('TODOS_V1', JSON.stringify( [] ));
    parsedTodos = [];
  }
  else {
    // Leemos el localStorage
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);

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

  // Función para actualizar el estado y el localStorage
  const saveTodos = (newTodos) => {
    // Primero lo guardamos en el estado
    setTodos(newTodos);
    // Y luego en el localStorage
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
