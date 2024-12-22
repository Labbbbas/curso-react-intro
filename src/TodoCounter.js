import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        total === completed 
        ? <h1 className='TodoCounter'> Has completado todos los todos :D </h1>
        : <h1 className='TodoCounter'> Has completado <span>{completed}</span> de <span>{total}</span> ToDos </h1>
    );
}

export { TodoCounter };