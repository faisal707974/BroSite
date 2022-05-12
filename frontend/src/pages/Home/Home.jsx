import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './Home.css'
import Login from "../Login/Login";
// import Crrp from "../../components/Cropper/crrp";


export default function Home({modal}) {
    const [show, setShow] = useState(false);

    const [result, setResult] = useState(null)

    return (
        <>
            <h1>Home page</h1>
            
            <Link to='/register'>Register</Link>
            <br />
            <Link to='/login'>Login</Link>

            {modal && <Login show setShow={setShow}/>}

            {/* <Crrp/> */}
        </>
    )
}

