import React from "react";
import '../Logo/Logo.css'

export default function ({broColor}) {
    return (
        <>
            <div className="logobase">
                <div className="head d-flex justify-content-center">
                    <h2>
                        {/* <span className="bgBlock"></span> */}
                        <span className="bro" style={{color:`${broColor}`}}>BRO</span>
                        <span className="totype">TOTYPE</span>
                    </h2>
                </div>
                <div className="tag d-flex justify-content-center">
                    <p>BROTHER YOU NEVER HAD</p>
                </div>
            </div>
        </>
    )
}