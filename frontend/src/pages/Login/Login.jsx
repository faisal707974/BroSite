import React, { useState, useEffect, useRef } from "react";
import '../Login/Login.css'
import { Modal, CloseButton, Container } from 'react-bootstrap'
import img from '../../assets/images/10.jpg'
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { GoogleLogin } from 'react-google-login'
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";

export default function Login({ handleClose, setShow, show }) {

    const googleClientID = '490727042506-og1oh4j5hm2lsbqmvrru0c1gdtqtot29.apps.googleusercontent.com'
    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: 'all' })

    const navigate = useNavigate()
    const [validErr, setValidErr] = useState()

    const dispatch = useDispatch()
    const loginState = useSelector((state) => (state.login))
    
    const onSubmit = async (data) => {
        dispatch(loginAction(data, setValidErr, navigate))
        // console.log(1)
        // if (loginState?.userInfo.role === 'newRegistration') {
        //     console.log(2)
        //     navigate('/new_registration')
        // } else if (loginState?.userInfo.role === 'fumigation') {
        //     console.log(3)
        //     navigate('/fumigation')
        // }
    }

    const checkValid = () => {
        if (errors.username?.type === 'required' && errors.password?.type === 'required') {
            setValidErr('username and password are required')
        } else if (errors.username?.type === 'required') {
            setValidErr('username is required')
        } else if (errors.password?.type === 'required') {
            setValidErr('password is required')
        } else if (errors.username?.type === 'pattern') {
            setValidErr('username should contain first and last name')
        } else if (errors.password?.type === 'pattern') {
            setValidErr('password should contain 8 characters including letters and numbers ')
        } else {
            setValidErr('')
        }
    }

    return (
        <>
            <div>
                <Modal show={show} onHide={() => { navigate('/') }} className="login">
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
                                    <CloseButton onClick={() => { navigate('/') }} variant='white' className="m-2" />
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

                            <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>

                                <div>
                                    <i className='login-i fa-solid fa-user'></i>
                                    <input className={"credentials " + (errors.username ? 'error-input' : '')} type="text" placeholder="username" autoFocus name="username"
                                        {...register('username', {
                                            required: true,
                                            pattern: /^[a-zA-Z]+\s[a-zA-Z]+$/
                                        })}
                                    />
                                </div>
                                <div>
                                    <i className='login-i fa-solid fa-lock'></i>
                                    <input className={"credentials " + (errors.password ? 'error-input' : '')} type="password" placeholder="password" name="password"
                                        {...register('password', {
                                            required: true,
                                            pattern: /(?=.*\d)(?=.*[a-zA-Z]).{8,}/
                                        })}
                                    />
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
                                    <button className="proceed mx-auto" onClick={() => checkValid()} type="submit" >Proceed</button>
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
                            {/* <GoogleLogin
                                clientId={googleClientID}
                                buttonText="Sign In"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                plugin_name='BroSite'
                            /> */}
                        </div>

                    </Modal.Body>

                    {validErr ?
                        <div className="error-msg">
                            <p>{validErr}</p>
                        </div>
                        : null
                    }

                </Modal>
            </div>
        </>
    )
}