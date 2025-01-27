import React from 'react';
import './TodoItem.css';
import { LuCircleCheckBig } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { TodoContext } from '../TodoContext';

function TodoItem(props) {
  const {
    openEditModal,
    setOpenEditModal,
  } = React.useContext(TodoContext);

  return (
    <li className="TodoItem">
      
      {/* Aquí se agrega el icono de check */}
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <LuCircleCheckBig />
      </span>

      {/* Aquí se agrega el texto del ToDo */}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}> {props.text} </p>

      {/* Aquí se agrega el icono de editar */}
      <span
        className='Icon Icon-edit'
        onClick={props.onEdit}
      >
        <MdOutlineEdit />
      </span>

      {/* Aquí se agrega el icono de eliminar */}
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