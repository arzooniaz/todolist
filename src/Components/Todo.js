import React from 'react'
import { SquarePen, Trash } from 'lucide-react';
const Todo = ({todo,handleDelete,  setShowEdit, showEdit}) => {
  
  return (
    <div className='Todo'>
      <p >{todo.text} </p>
      <div style={{display:"flex ", gap:"0px 6px"}}>
        <SquarePen size={18} onClick={()=>setShowEdit({Show:!(showEdit.Show), id: todo.id})} color="white" />
      <Trash onClick={()=>handleDelete(todo.id)} size={18} color="white" />
      </div>
    </div>
  )
}

export default Todo
