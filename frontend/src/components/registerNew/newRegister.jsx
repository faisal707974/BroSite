import React from "react";
import '../registerNew/newRegister.css'
import { Header, Body, Form } from 'react-bootstrap'

export default function NewRegister() {
    return (
        <>
            <div className="Register">
                <header>
                    <div className="logo">
                        <h3>Brototype</h3>
                    </div>
                </header>
                <body>
                    <div className="banner">

                    </div>
                    <div className="banner-down">

                    </div>
                    <div className="content container">
                        <div className="content-head">
                            <h3>New Registration</h3>
                        </div>
                        <div className="content-body">
                            <Form action="">
                                <div className="row registration-form mx-auto mt-3">

                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">First Name</Form.Label>
                                                    <Form.Control className='control-form' type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Last Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Date of Birth</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Gender</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Address</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">District</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">State</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">E-mail</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Whatsapp</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">Login password</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                            <div className="col">
                                                <Form.Group>
                                                    <Form.Label htmlFor="">confirm password</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </body>

            </div>
        </>
    )
}