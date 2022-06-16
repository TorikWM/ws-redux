import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todoAction'

function AddTodo() {
  const [text,setText]= useState("");
  const dispatch = useDispatch();
  const handelAdd= (e) =>{
    e.preventDefault()
    if (text){
      dispatch(addTodo({id:Math.random(),done:false,text}))
      setText("");
    }
  }
  return (
    <div>
       <Form onSubmit={handelAdd}
        style={{width:'50%',margin:'auto',display:'flex', paddingBottom:'20px'}}>
           <FormControl type='text' value={text} 
           onChange = {e => setText(e.target.value)} />
           <Button variant='info'
           type='submit'> 
           Add
           </Button>
           </Form> 
    </div>
  )
}

export default AddTodo