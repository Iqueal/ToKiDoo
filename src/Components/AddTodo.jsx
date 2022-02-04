import React from 'react';
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


const AddTodo = (props) => {

    const onSave = (e) => {
        e.preventDefault();
        isEmpty();
        if (addTitle !== "" && addDesc !== "") {
            props.addTodo(addTitle, addDesc)
            setTitle("");
            setDesc("");
        } 
    }

    const onReset = () => {
        setTitle("");
        setDesc("");
    }

    const [addTitle, setTitle] = useState("");
    const [addDesc, setDesc] = useState("");
    const [getAlert, setAlert] = useState("");

    let isEmpty = () => {
        setAlert(addTitle === "" || addDesc === "" ? addTitle === "" ? "Cannot save todo without title." : "Cannot save todo without description." : "");
    }


    return (
        <>
            <div className='container'>
                {
                    getAlert !== "" ? <Alert variant='warning'> { getAlert } </Alert> : ""
                }
                <h2 className="text-success my-2 mx-4 font-xl text-center">Add Todos</h2>
                <Form border='warning'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Todo Title</Form.Label>
                        <Form.Control type="text" value={ addTitle } onChange={ (e) => setTitle(e.target.value) } placeholder="Todo title here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Todo Description</Form.Label>
                        <Form.Control value={ addDesc } onChange={ (e) => setDesc(e.target.value) } placeholder="Todo description here" as="textarea" rows={ 3 } />
                    </Form.Group>
                    <div className="mx-2 text-center">
                        <Button className="mx-2" variant='danger' type="reset" onClick={ onReset }>Reset</Button>
                        <Button className="mx-2" variant='success' type='submit' onClick={ onSave }>Save</Button>
                    </div>
                </Form>
            </div>
            <hr className='mb-4 mt-4' />
        </>
    )
};

export default AddTodo;
