import React, {useState} from "react";
import {Link} from 'react-router-dom'
import '../Home/Home.css'
import Login from "../Login/Login";



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

