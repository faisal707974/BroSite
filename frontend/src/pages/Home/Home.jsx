import React, { useReducer, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import './Home.scss'
import Login from "../Login/Login";
import Logo from "../../components/General/Logo/Logo";
import { images } from "../../Utils/data";


export default function Home({ modal }) {
    const [show, setShow] = useState(false);

    const [result, setResult] = useState(null)

    const patternRow = useRef()

    function scrollHandling(scrollOffset) {
        console.log(scrollOffset)
        console.log(patternRow.current.scrollLeft)
        // patternRow.current.scrollLeft += scrollOffset
    }

    return (
        <>
            <div className="home">
                <div className="text">
                    <Logo broColor1={'black'} broColor2={'white'} />
                </div>
                <div className="links">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>

                <div className="title">
                    <div className="banner">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-plkg0bon8QyqEe18PjtGlNrfa15WHt1YA&usqp=CAU" width='200' height='100' alt="" />
                            <h1>No. 1 Malayalam Tech Channel</h1>
                            <hr />
                            <h3>No Tuition Fee Upfront, Pay Only When You Earn.</h3>
                            <h5>From Zero to a high paid Software Engineer in 180 days.</h5>
                        </div>
                    </div>
                    <div ref={patternRow} className="pattern row" onScroll={(e) => scrollHandling(e)}>
                        {images.map((img, index) => {
                            return (
                                <img key={index} src={img} alt="" />
                            )
                        })}
                    </div>

                    {/* <div className="arrow">
                        <span></span>
                        <span></span>
                    </div> */}
                </div>
                <i className="fas fa-angle-left" onClick={() => scrollHandling(-20)}></i>
                <i className="fas fa-angle-right"></i>

                {modal && <Login show setShow={setShow} />}
            </div>
        </>
    )
}