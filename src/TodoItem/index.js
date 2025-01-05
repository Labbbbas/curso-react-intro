import './TodoItem.css';
import { LuCircleCheckBig } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        > 
          <LuCircleCheckBig />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}> {props.text} </p>
        <span 
          className='Icon Icon-delete'
          onClick={props.onDelete}
        > 
          <AiOutlineDelete />

        </span>
      </li>
    );
}

export { TodoItem };