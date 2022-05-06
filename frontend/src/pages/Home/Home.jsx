import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './Home.css'
import Login from "../../pages/Login/Login";



export default function Home({modal}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Home page</h1>
            
            <Link to='/register'>Register</Link>
            <br />
            <Link to='/login'>Login</Link>

            {modal && <Login show setShow={setShow}/>}
        </>
    )
}

