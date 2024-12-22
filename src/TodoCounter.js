import './TodoCounter.css';
import { FaFlagCheckered } from "react-icons/fa";


function TodoCounter({ total, completed }) {
    return (
        total === completed 
        ? <h1 className='TodoCounter'> <FaFlagCheckered /> Has completado todos los ToDos <FaFlagCheckered /> </h1>
        : <h1 className='TodoCounter'> Has completado <span>{completed}</span> de <span>{total}</span> ToDos </h1>
    );
}

export { TodoCounter };