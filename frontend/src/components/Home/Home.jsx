import React from "react";
import {Link} from 'react-router-dom'
import style from '../Home/Home.module.css'
import Login from "../Login/Login";



export default function Home() {
    return (
        <>
            <h1 className={style.test}>Home page</h1>
            <Link to='/register'>Register</Link>
            <Login/>
        </>
    )
}

