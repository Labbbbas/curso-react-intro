import React from "react";

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla',completed: false },
//   { text: 'Completar el curso de react de platzi',completed: false },
//   { text: 'LALALALA',completed: false },
//   { text: 'Ir a six flags',completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



// Esta función nos va a permitir trabajar con el localStorage para ToDos y para cualquier 
// otra cosa; ya que los tratamos como items, es decir, elementos de manera general
function useLocalStorage(itemName, initialValue) {
    // NOTA IMPORTANTE: Para guardar algo en localStorage tenemos que "stringifiarlo"
    // Y para leer algo del localStorage tenemos que "parsearlo"

    // Nuestro estado almacena la info del localStorage
    const [item, setItem] = React.useState(initialValue);

    // Creamos dos nuevos estados
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // Encapsulamos el llamado al localStorage en un efecto
    React.useEffect(() => {
        setTimeout(() => {
            try {
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
                    setItem(parsedItem);
                }

                // Para cuando termine de cargar
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    // Función para actualizar el estado y el localStorage
    const saveItem = (newItem) => {
        // Primero lo guardamos en el estado
        setItem(newItem);
        // Y luego en el localStorage
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    // Devolvemos el contenido y el actualizador del estado y el localStorage
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };