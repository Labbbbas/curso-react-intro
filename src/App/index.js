import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  // Los estados tienen que estar en el componente padre (aquí en App) para poder comunicarse con los hijos
  // No se puede comunicar de hijos a padres
  return (
    // Envolvemos la App entera en el contexto para que se aplique a todos sus componentes children
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
