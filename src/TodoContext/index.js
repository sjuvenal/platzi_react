import React from 'react'
import { useLocalStorage } from './useLocalStorage'

//creamos nuestro propio personalizado
const TodoConext = React.createContext();

function TodoProvider( {children}) {

  //const [todos, setTodos] = React.useState(parsedTodos);  
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const {
    item: todos, //reasigmons, mejor dicho cambimos de nombre
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(true);
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  
  const totalTodos = todos.length;
/* 
  console.log('Log 1')
  
  React.useEffect(() => {
    console.log('LoOOOOOO 2')
  });
  
  React.useEffect(() => {
    console.log('LoOOOOOOdd 2')
  }, [totalTodos])

  console.log('Log 3')

*/
  const searchTodo = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )

  //console.log('Los usuarios buscan todo del ' + searchValue)

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    //setTodos(newTodos)
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    //setTodos(newTodos)
    saveTodos(newTodos)
  }


    return (
        <TodoConext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoConext.Provider>
    )

}

export { TodoConext, TodoProvider }