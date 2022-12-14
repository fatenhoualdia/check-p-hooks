import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './AddMovie.css'
const AddMovie = ({handleAddMovie }) => {

    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rate: 0
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mySubmitHandler = (event) => {
        event.preventDefault();
        handleAddMovie(newMovie)
        setNewMovie({
            title: "",
            description: "",
            posterURL: "",
            rate: ""
        })
        handleClose()
    }
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <button type="button" className="btn" onClick={handleShow} style={{color: 'white'}}>New movie</button>
            <Modal style={{ backgroundColor: 'rgb(204, 153, 193)' }} show={show} onHide={handleClose} animation={false} >
                <Modal.Header >
                    <Modal.Title> New Movie </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={mySubmitHandler}>
                        <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange} required />
                        <Form.Control type="text" name="description" placeholder="Description" onChange={handleChange} required />
                        <Form.Control type="image" name="posterURL" placeholder="PosterURL" onChange={handleChange} required />
                        <Form.Control type="number" name="rate" placeholder="Rate" onChange={handleChange} required />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' onClick={mySubmitHandler}>Save Changes</Button>
                    <Button variant="secondary" type='submit' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AddMovie;
