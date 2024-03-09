import './CreateTodoButton.css'
import React from 'react';
import { TodoConext } from '../TodoContext';

function CreateTodoButton() {

  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoConext);
  
  return (
    <button className="CreateTodoButton"
            onClick={
              (event) => {
                console.log('le distes click')
                console.log(event)
                console.log(event.target)
                {setOpenModal(!openModal)}
              }
            }
    >+</button>
  );
}

export { CreateTodoButton };