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

// Esta función nos va a permitir trabajar con el localStorage para ToDos y para cualquier 
// otra cosa; ya que los tratamos como items, es decir, elementos de manera general
function useLocalStorage(itemName, initialValue) {
  // NOTA IMPORTANTE: Para guardar algo en localStorage tenemos que "stringifiarlo"
  // Y para leer algo del localStorage tenemos que "parsearlo"

  // Nos traemos el item que queremos el localStorage
  const localStorageItem = localStorage.getItem(itemName); 
  
  // Variable para leer nuestros items
  let parsedItem;

  if (!localStorageItem) { // Si el localStorage que buscamos está vacío
    // Guardamos el localStorage como un array vacío
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  }
  else { // Si sí tenemos algo en el localStorage 
    // Leemos el localStorage
    parsedItem = JSON.parse(localStorageItem);
  }

  // Nuestro estado almacena la info del localStorage
  const [item, setItem] = React.useState(parsedItem);

  // Función para actualizar el estado y el localStorage
  const saveItem = (newItem) => {
    // Primero lo guardamos en el estado
    setItem(newItem);
    // Y luego en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem));
  }

  // Devolvemos el contenido y el actualizador del estado y el localStorage
  return [item, saveItem];
}

function App() {
  // Los estados tienen que estar en el componente padre (aquí en App) para poder comunicarse con los hijos
  // No se puede comunicar de hijos a padres

  // Le pasamos el localStorage que queremos modificar y su valor inicial
  // Aquí ya podemos poner nombres acordes. En lugar de item, le ponemos ToDos
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  
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
