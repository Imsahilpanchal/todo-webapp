import "./App.css";
import { useState } from "react";

function App(){
  const[text,setText] = useState('');
  const[list,setList] = useState([]);

  function add(){
    if(text === "") return;
    setList([...list,text]);
    setText("");
  }
  
  function deleteto(indexto){
  const newlist = list.filter((item,index)=>(index !== indexto))
  setList(newlist);
  }

function editto(indexto, itemto){
  setText(itemto);
  const newlist = list.filter((item,index)=>(index !== indexto))
  setList(newlist);
}


  return(
    <>
    <div className="container">
    <h1 className="todo">Todo App</h1>
     
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={add} className="but">Add</button>
   </div>
    <ul className="list">
      {list.map((item,index)=>(<li key={index} className="item">{item}
        <div className="action">
        <button className="but" onClick={()=>deleteto(index)}><small>Delete</small></button>
        <button className="but" onClick={()=>editto(index, item)}><small>Edit</small></button>
        </div>
      </li>))}
    </ul>
    </>
  )
}
export default App;