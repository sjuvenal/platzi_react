import './TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    <>
    {completed === total && total !== 0 && ( 
    <h1 className='TodoCounter'>Has completado todos tus TODOS 🥳</h1>
    )}
    {completed !== total && (
    <h1 className='TodoCounter'>
      Has completado <span> {completed} </span>de  
      <span> {total} </span>TODOS
    </h1>
    )}{
      total === 0 && ( 
        <h1 className='TodoCounter'>No existe registros</h1>
        ) 
      }
    </>
  );
}

export { TodoCounter };
