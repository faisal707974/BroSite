import React from "react";
import './DateCard.scss'

export default function DateCard({date, month, day}) {
    return (
        <>
            <div className="DateCard">
                <div className="row">
                    <p className='date'>{date}</p>
                    <p className='month'>{month}</p>
                </div>
                <hr />
                <div className="row">
                    <p className='day'>{day}</p>
                </div>
            </div>
        </>
    )
}