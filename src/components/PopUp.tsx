import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
    title: string;
    show: boolean;
    description: string;
    handleClose: () => void,
    updateCardDetails?: (description: string) => void
}

export default function PopUp(props: Props) {

    const [ description, setDescription ] = useState("");


    useEffect(() => {
        setDescription(props.description);
        // console.log("initial render: ", props.description)
    }, [])

    const updateDescription = (e:any) => {
        const temp: string =  e.target.value
        setDescription(temp);
    }

    const saveChanges = () => {
        if(props.updateCardDetails){
          props.updateCardDetails(description);
        }
      }

    if (!props.show){
        return null;
    }

    // console.log(props.description)

    return (
           <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="hello world"
                        value={description}
                        onChange={(e: any)=> updateDescription(e)}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={saveChanges}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal> 
    )
}
