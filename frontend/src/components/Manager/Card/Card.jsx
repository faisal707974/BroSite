import React, { useEffect, useState } from "react";
import './Card.scss';
import ToggleBtn from "../ToggleBtn/ToggleBtn";

export default function Card() {
    const [status, setStatus] = useState(null)
    const [toggle, setToggle] = useState(null)

    useEffect(() => {
        if (status) {
            setStatus(null)
        }
    }, [toggle])

    return (
        <>
            <div className="card">
                <div className="top-icons">
                    <span className="fas fa-user"></span>
                    <span className={"fas fa-check" + (status ? ' ready' : '')} onClick={() => setStatus(toggle)}></span>
                </div>
                <img src="https://likhowithpride.com/site/assets/files/1108/opulent-profile-square-07.jpg" alt="" />
                <h6>Amruth Todkar</h6>
                <ToggleBtn toggle={toggle} setToggle={setToggle} />
            </div>
        </>
    )
}