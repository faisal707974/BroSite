import React, { useState } from "react";
import '../Login/Login.css'
import { Modal, CloseButton, Container } from 'react-bootstrap'
import img from '../../assets/images/6.jpg'

export default function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="login">
                <p className='btn border-0 bg-none p-0 m-0' onClick={handleShow}> Login </p>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Body>

                        <div className="input-div ms-auto">
                            <div className="text-end">
                                <CloseButton onClick={handleClose} variant='white' className="m-2" />
                            </div>
                            <form action="" className="login-form">
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="password" />

                                <button type="submit" >Submit</button>

                            </form>
                            <p>---------------------or---------------------</p>
                            <button>login with Google</button>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}