import React, { useState } from "react";
import '../Login/Login.css'
import { Modal, CloseButton, Container } from 'react-bootstrap'
import img from '../../assets/images/10.jpg'
import Logo from "../../components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login({handleClose, setShow, show}) {
   
    const navigate = useNavigate()
    
    return (
        <>
            <div>
                <Modal show={show} onHide={()=>{navigate('/')}} className="login">
                    <Modal.Body>

                        <div>
                            <div className="logo ms-4 mt-3">
                                <Logo broColor1={'#6da4f2'} broColor2={'white'} />
                            </div>
                            <img className="logo-image" src={img} alt="" />
                        </div>

                        <div className="input-div ms-auto">

                            <div className="login-title-div">
                                <div className="login-close text-end">
                                    <CloseButton onClick={()=>{navigate('/')}} variant='white' className="m-2" />
                                </div>
                                <div className="login-title mb-4">
                                    <h3 className="ms-1">
                                        <span>
                                            Lo
                                        </span>
                                        <span>
                                            gin
                                        </span>
                                    </h3>
                                </div>
                            </div>

                            <form action="" className="login-form">

                                <div>
                                    <i className='login-i fa-solid fa-user'></i>
                                    <input className="credentials" type="text" placeholder="username" autoFocus/>
                                </div>
                                <div>
                                    <i className='login-i fa-solid fa-lock'></i>
                                    <input className="credentials" type="password" placeholder="password" />
                                </div>
                                <div className="login-button">
                                    <p className="white m-0 d-inline d-flex justify-content-between">
                                        <span>
                                            <input className="m-0" type="checkbox" />
                                            <span className="ms-1">
                                                Remember me
                                            </span>
                                        </span>
                                        <span>
                                            Forget password?
                                        </span>
                                    </p>
                                    <button className="proceed mx-auto" type="submit" >Proceed</button>
                                </div>

                            </form>

                            <div className="google-login ">
                                <p className="white my-3 mx-auto fit-content">----------------------or----------------------</p>
                                {/* <button className="mx-auto" type="submit" >Sign in with Google</button> */}
                                <p className="white google mx-auto">
                                    Sign in with &nbsp;
                                    <span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="" />
                                    </span>
                                </p>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}