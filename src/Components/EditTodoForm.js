import React, {useState} from 'react'

const EditTodoForm = ({todo, handleEdit}) => {
  const [edit, setEdit] = useState(todo.text);
  return (
    <div className='TodoForm'>
      {/* <h1>To Do List</h1> */}
      <input className='todo-input' type='text' value={edit} placeholder='What i am gonna do today?' onChange={(e)=>setEdit(e.target.value)}></input>
      <button className='todo-btn' onClick={()=>handleEdit(todo.id, edit)}  >Update</button>
    </div>
  )
}

export default EditTodoForm
