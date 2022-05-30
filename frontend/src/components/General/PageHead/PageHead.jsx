import React from "react";
import './PageHead.scss'

export default function PageHead({title}) {
    return (
        <>
            <div className="PageHead">
                <h1>{title}</h1>
            </div>
        </>
    )
}