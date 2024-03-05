import React from 'react';
import './TodoCounter.css'
import { TodoConext } from '../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoConext)

  return (
    <>
    {completedTodos === totalTodos && totalTodos !== 0 && ( 
    <h1 className='TodoCounter'>Has completado todos tus TODOS 🥳</h1>
    )}
    {completedTodos !== totalTodos && (
    <h1 className='TodoCounter'>
      Has completado <span> {completedTodos} </span>de  
      <span> {totalTodos} </span>TODOS
    </h1>
    )}{
      totalTodos === 0 && ( 
        <h1 className='TodoCounter'>No existe registros</h1>
        ) 
      }
    </>
  );
}

export { TodoCounter };
