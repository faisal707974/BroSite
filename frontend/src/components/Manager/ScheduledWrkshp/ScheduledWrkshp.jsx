import React from "react";
import { Link } from "react-router-dom";
import './ScheduledWrkshp.scss'

export default function ScheduledWrkshp() {
    return (
        <>
            <div className="ScheduledWrkshp">
                <div>
                    <h3>Kochi</h3>
                </div>
                <div>
                    <h6>10 days to go</h6>
                </div>

                <div className='DateCards'>
                    <div className='DateCard'>
                        <div className="row">
                            <p className='date'>31</p>
                            <p className='month'>October</p>
                        </div>
                        <hr />
                        <div className="row">
                            <p className='day'>Tuesday</p>
                        </div>
                    </div>
                    <div className='DateCard'></div>
                    <div className='DateCard'></div>
                </div>
                <div className='Options'>
                    <p>Change schedule</p>
                    <p>Cancel schedule</p>
                    <p>Change venue</p>
                    <p>Seats availability</p>
                    <p>Add new schedule</p>
                    <p>Batch</p>
                    <p>filled seats</p>
                    <Link to={'/manager/workshop/event_day'}>
                    <p>Event day</p>
                    </Link>
                </div>
            </div>
        </>
    )
}