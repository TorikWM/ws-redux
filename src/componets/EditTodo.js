import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/todoAction';

function EditTodo({ todo }) {
  
    

  const [show, setShow] = useState(false);
  const [text, setText] = useState(todo.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl type='text' 
            value={text} 
            onChange={e => setText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTodo(todo.id,text));
        handleClose()
        }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


        
    
  

export default EditTodo