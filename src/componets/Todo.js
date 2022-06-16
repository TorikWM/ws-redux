import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { doneTodo, removeTodo } from '../redux/actions/todoAction';
import EditTodo from './EditTodo';

function Todo({todo}) {
  const dispatch = useDispatch();
  return (
    <div style={{display:'flex',width:'50%',justifyContent:'space-around',aligneItems:'center',margin:'auto'}}>
   <p style={{textDecoration:todo.done? 'line-through': null}}>{todo.text}</p>
   <Button variant='danger' onClick={() => dispatch(removeTodo(todo.id))}>Delete</Button>
  <EditTodo todo={todo}/>
   <Button variant='secondary' onClick={() => dispatch(doneTodo(todo.id))}>Done</Button>
    </div>
  )
}

export default Todo