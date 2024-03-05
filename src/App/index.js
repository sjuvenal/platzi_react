import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage'

/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'LALAFSDFDD', completed: false },
  { text: 'WERWERER', completed: false },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');
*/

function App() {
  //const [todos, setTodos] = React.useState(parsedTodos);  
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const {
    item: todos, //reasigmons, mejor dicho cambimos de nombre
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  
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
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodo={searchTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
