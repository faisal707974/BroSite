import React, { useState } from "react";
import './ToggleBtn.scss'

export default function ToggleSwitch({toggle, setToggle}) {
 
    return (
        <>
            <div className={"ToggleSwitch " + (
                toggle === 'present' ? 'present' :
                    toggle === 'absent' ? 'absent' :
                        toggle === 'cancelled' ? 'cancelled' : ''
            )}>
                <div className="track">
                    <span onClick={() => { setToggle('present') }}> <p></p> </span>
                    <span onClick={() => { setToggle('cancelled') }}> <p></p> </span>
                    <span onClick={() => { setToggle('absent') }}> <p></p> </span>
                </div>
                <span className={"button " + (
                    toggle === 'present' ? 'moveLeft' :
                        toggle === 'absent' ? 'moveRight' :
                            toggle === 'cancelled' ? 'moveCenter' : ''
                )} > </span>
                <div>
                    <p className="status">{toggle}</p>
                </div>
            </div>
        </>
    )
}