import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import Logo from '../General/Logo/Logo'
import './registrationThanks.css'

export default function RegComplete({ modal, error, userInfo }) {


    return (
        <>
            <Modal show={modal} className='RegComplete'>
                <Modal.Body>
                    <div className='reply'>
                        <div className='message'>
                            <Logo broColor1={"#03a9f4"} broColor2={'black'} />
                            <hr />
                            <div className='content'>
                                <h2>Welcomes you</h2>
                                <h2>Welcomes you</h2>
                            </div>
                            <hr />
                            <h4>You have successfully completed the Registration</h4>
                            <p>log into your profile and complete the payment. You will get more other information there.</p>
                            <div className="buttons">
                                <Link to='/login'>
                                    <button className='greenButton'>Login Now</button>
                                </Link>
                                <Link to='/'>
                                    <button className='redButton'>Login Later</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}