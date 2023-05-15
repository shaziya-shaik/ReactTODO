import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList =(inputText)=>{
    setListTodo([...listTodo,inputText])
  }

  const deleteListItem=(key)=>{
      let newListTodo=[...listTodo];
      newListTodo.splice(key,1);
      setListTodo([...newListTodo])
  }
  return (
    <div className="main-container" >
    <div className="center-container">
    
    <h1 className='app-heading'>Todo</h1>
    <br/>
    {listTodo.map((listItem,i)=>{
      return (
        <TodoList key={i}  index={i} item={listItem} deleteItem={deleteListItem}/>
      )
    })}
   < br />
   <br />
   <hr/>
    <TodoInput addList={addList}/>
    </div>
    </div>
  )
}

export default App