import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { doneTodo } from '../redux/actions/todoAction';
import Todo from './Todo';

function ListeTodo() {
  const [filter,setfilter]=useState(false)
  const [done,setDone]=useState(true) 
  const todos = useSelector(state => state.todoReducer.todos)
  return (
    <div>
      <div style={{display:"flex", width:'50%', margin:'auto',paddingBottom:'100px',justifyContent:'space-around'}} >
        <Button variant='outline-success' onClick={() =>{ setfilter(true); setDone(true)}}>Don</Button>
        <Button variant='outline-danger' onClick={() =>{ setfilter(true); setDone(false); }}>UnDo</Button>
        <Button variant='outline-info' onClick={() => setfilter(false) }>All Todo</Button>
      </div>
    {
      !filter ? 
      <>
        { todos.map(todo => (
        <Todo  key={todo.id} todo={todo}/>
        ))}
        </> :done ?  <> {todos.filter(todo => todo.done===true).map(todo => (
        <Todo  key={todo.id} todo={todo}/>
        ))}
        </>: <> {todos.filter(todo => todo.done===false).map(todo => (
        <Todo  key={todo.id} todo={todo}/>
        ))}
        </>
        

    }

    </div>
  )
}

export default ListeTodo ;