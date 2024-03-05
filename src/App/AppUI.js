import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI( {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodo,
    completeTodo,
    deleteTodo
}){
    return (
        <>
          <TodoCounter 
            completed={completedTodos} 
            total={totalTodos} 
          />
          <TodoSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
              )}
            {error && <TodosError />}
            {(!loading && searchTodo.length === 0) && <EmptyTodos />}
            {searchTodo.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          <CreateTodoButton />
        </>
      );
}

export { AppUI }