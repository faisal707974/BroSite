import React from "react";
import { Link } from "react-router-dom";
import './HexaOptions.scss'

export default function HexaOptions({ text, color, link = '', click}) {



    return (
        <>
            <div className="HexaOptions" >
                <div className="frame" style={{ '--color9': color }}>
                    <div>
                        <Link to={link}>
                            <p onClick={click} >{text}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}