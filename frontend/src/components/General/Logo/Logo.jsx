import React from "react";
import './Logo.css'

export default function ({broColor1, broColor2}) {
    return (
        <>
            <div className="logobase">
                <div className="head d-flex justify-content-center">
                    <h2>
                        {/* <span className="bgBlock"></span> */}
                        <span className="bro" style={{color:`${broColor1}`}}>BRO</span>
                        <span className="totype" style={{color:`${broColor2}`}}>TOTYPE</span>
                    </h2>
                </div>
                <div className="tag d-flex justify-content-center">
                    <p style={{color:`${broColor2}`}}>BROTHER YOU NEVER HAD</p>
                </div>
            </div>
        </>
    )
}