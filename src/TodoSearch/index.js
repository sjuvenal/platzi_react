import './TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
  //const [searchValue, setSearchValue] = React.useState('');

  //console.log('Los usuarios buscan todo de ' + searchValue)
  return (
    <input 
    placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={
      (eventt) => {
        console.log(eventt)
        console.log(eventt.target)
        console.log(eventt.target.value)
        setSearchValue(eventt.target.value)
      }
    } />
  );
}

export { TodoSearch };
