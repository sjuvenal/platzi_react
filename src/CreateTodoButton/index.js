import './CreateTodoButton.css'
import React from 'react';
import { TodoConext } from '../TodoContext';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className="CreateTodoButton"
            onClick={
              /*(event) => {
                console.log('le distes click')
                console.log(event)
                console.log(event.target)
              }*/
              () => {
                console.log('le distes click')
                setOpenModal(state => !state);
              }
            }
    >+</button>
  );
}

export { CreateTodoButton };