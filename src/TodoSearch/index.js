import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
        loading,
    } = React.useContext(TodoContext);

    return (
        loading
            ? null
            : <input
                placeholder="Busca tu ToDo"
                className='TodoSearch'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
    );
}

export { TodoSearch };