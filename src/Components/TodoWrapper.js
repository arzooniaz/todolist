import React, { useState } from 'react'

import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import TodoForm from './TodoForm';
const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);
  const [showEdit, setShowEdit] = useState({Show:false,id:0});
  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }
  const handleEdit = (id, text) => {
    const newItemNoArray = {text, id:todos.length>0 ? todos[todos.length-1].id+1: 1};
    setTodos([...todos.filter((todo) => todo.id !== id), newItemNoArray]);
    setShowEdit({Show:false,id:0});
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.map((todo, index) => {
        return <div key={index}>
          <Todo
            todo={todo}
            handleDelete={handleDelete} setShowEdit={setShowEdit} showEdit={showEdit} />
          {
            (showEdit.Show && showEdit.id-1===index) && <EditTodoForm todo={todo} handleEdit={handleEdit} />
          }
        </div>
      })}
    </div>
  )
}

export default TodoWrapper
