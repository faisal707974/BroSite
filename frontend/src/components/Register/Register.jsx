import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../Register/Register.css'
import Logo from '../Logo/Logo'
import Input from '../Register/RegistrationInput/RegistrationInput'
import Photo from '../Register/profilePhoto/profilePhoto'

export default function () {
    return (
        <>
            <div className='Register'>
                <div className="header d-flex justify-content-center aign-items-center">
                    <div className="col logo">
                        <Logo></Logo>
                    </div>
                </div>
                <div className="form-div row w-75  mx-auto d-flex justify-content-center align-items-center">
                    <div className='mt-4 ms-4'>
                        <h3 className=''>REGISTRATION</h3>
                    </div>
                    <Form action="">
                        <div className='profilePic'>
                            <Photo />
                        </div>
                        <div className="row registration-form mx-auto my-3 mb-5">

                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <Input type={'text'} id={'fullName'} text={'Full Name'} />
                                    </div>
                                    <div className="col"></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="date" id='dob' placeholder='dob' />
                                            <Form.Label htmlFor="dob">Date of Birth</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='gender' placeholder='gender' />
                                            <Form.Label htmlFor="gender">Gender</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control as='textarea' type="text" id='address' placeholder='address' />
                                            <Form.Label htmlFor="address">Address</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='district' placeholder='district' />
                                            <Form.Label htmlFor="district">District</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='state' placeholder='state' />
                                            <Form.Label htmlFor="state">State</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='email' placeholder='email' />
                                            <Form.Label htmlFor="email">E-mail</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='whatsapp' placeholder='whatsapp' />
                                            <Form.Label htmlFor="whatsapp">Whatsapp</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='employment' placeholder='employment' />
                                            <Form.Label htmlFor="employment">Employment status</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='education' placeholder='education' />
                                            <Form.Label htmlFor="education">Educational Qualifications</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='college' placeholder='college' />
                                            <Form.Label htmlFor="college">Name of College/Organisation</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='graduation' placeholder='graduation' />
                                            <Form.Label htmlFor="graduation">Year of Graduation</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='password' placeholder='password' />
                                            <Form.Label htmlFor="password">Login password</Form.Label>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control type="text" id='confirm' placeholder='confirm' />
                                            <Form.Label htmlFor="confirm">confirm password</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control as='textarea' type="text" id='you' placeholder='you' />
                                            <Form.Label htmlFor="you">Tell us more about you</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control as='textarea' type="text" id='sps' placeholder='sps' />
                                            <Form.Label htmlFor="sps">Why do you want to join SPS?</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control as='textarea' type="text" id='motivation' placeholder='motivation' />
                                            <Form.Label htmlFor="motivation">What motivates you to work hard everyday?</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className='form-floating'>
                                            <Form.Control as='textarea' type="text" id='know' placeholder='know' />
                                            <Form.Label htmlFor="know">From where did you know about SPS?</Form.Label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p> I agree that I have read and understood all the FAQs</p>
                                    <div className='submit-button'>
                                        <Button>Register now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="row"></div>
            </div >
        </>
    )
}