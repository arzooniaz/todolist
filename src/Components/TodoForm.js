import React , {useState} from 'react'

const TodoForm = ({todos, setTodos}) => {
  const [input, setInput] = useState('');
  
  const addFunction= () =>{
    if(!input) 
    return;
  const newItemNoArray = {text: input, id:todos.length>0 ? todos[todos.length-1].id+1: 1};
  setTodos([...todos,newItemNoArray]);
  setInput('');
  }
  return (
    <div className='TodoForm'>
      <h1>To Do List</h1>
      <input className='todo-input' type='text' value={input} placeholder='What i am gonna do today?' onChange={(e)=>setInput(e.target.value)}></input>
      <button className='todo-btn' onClick={addFunction} >Add Task</button>
    </div>
  )
}



export default TodoForm;

