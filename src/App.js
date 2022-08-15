
import './App.css';
import React,{useState} from 'react'
import InputArea from "./components/InputArea"
import ToDoItem from "./components/ToDoItem"


function App() {

  const [items,setItems] = useState([]);


  
  const additems = (inputText)=>{
    setItems((prevItems)=>{
      return[...prevItems,inputText];
    })
  }

  const deleteitem = (id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return (index!==id)
      })
    })
  }
  return (
    <div className="container">
      <div className='heading'>
        <h1> To-Do List</h1>
        
      </div>
      <InputArea onAdd={additems}/>
      <div>
        <ul>
       {items.map((item,index)=>(
        <ToDoItem key={index} id={index} text={item} onChecked={deleteitem} /> 


      ))} 



        </ul>
      </div>
     
    </div>
  );
}

export default App;
