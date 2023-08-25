import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AddProject() {
const[id,setId]=useState('');
const[name,setName]=useState('');
const[tasks,setTasks]=useState('');
const IsValidate=()=>{
    let isProceed=true;
    let err='Please enter the value in';
    if(name===null||name===''){
        isProceed=false;
        err+=''
    }
    if(tasks===null||tasks===''){
        isProceed=false;
        err+=''
    }
    return isProceed;
}
const handleSubmit=(e)=>{
    e.preventDefault();
    let regobj={id,name,tasks}
    if (IsValidate()) {
        fetch("http://localhost:4000/user ",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res)=>{


    }).catch((err)=>{
        
        console.log("error")
    })
    

    }
    

}


  return (

    <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="4">
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Project Id</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Project Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tasks</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      </Form>
            </Col>
        </Row>
        <Button variant="primary">Add</Button>{' '}
        <Button variant="primary">Cancel</Button>{' '}
    </Container>
    
  )
}

export default AddProject