import React from "react";
import { Form } from "react-bootstrap";
import '../RegistrationInput/RegistrationInput.css'

export default function ({ type, id, text, }) {
    return (
        <>
        <div className="custom-input">
            <Form.Group className='form-floating'>
                <Form.Control type="{type}" id='{id}' placeholder='{id}' />
                <Form.Label htmlFor="{id}">{text}</Form.Label>
            </Form.Group>
        </div>
        </>
    )
}