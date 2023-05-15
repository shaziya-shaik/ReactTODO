import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add todo here..."
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
       
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add</button>      
    </div>
  );
}

export default TodoInput;