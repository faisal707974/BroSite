import React, { useEffect, useState } from "react";
import './EventDay.scss';
import Card from "../Card/Card";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EventDay() {
    const navigate = useNavigate()

    const current_workshop_id = useParams()

    const [participants, setParticipants] = useState()

    useEffect(() => {

        async function getParticipants() {
            const response = await axios.get('http://localhost:3001/manager/participants/' + current_workshop_id.id)
            setParticipants(response.data)
        }
        getParticipants()

    }, [])

    console.log(participants)

    return (
        <>
            <div className="EventDay">
                <h1>Event Day - 1</h1>
                <div className="attendance">

                    {participants ? participants.map((obj, index) => {
                        return (
                            <Card key={index} name={obj.Name} />
                        )
                    }) : null
                    }

                </div>
            </div>
        </>
    )
}