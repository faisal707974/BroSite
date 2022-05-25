import React, { useEffect } from "react";
import './EventDay.scss';
import Card from "../Card/Card";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EventDay() {
    const navigate = useNavigate()

    const current_workshop_id = useSelector((state) => state.WorkshopId)

    useEffect(() => {
        if (current_workshop_id === '') {
            navigate('/manager/workshop')
        } else {
            console.log(current_workshop_id)
            const participants = axios.get('http://localhost:3001/manager/participants/'+ current_workshop_id)
        }

    }, [])



    return (
        <>
            <div className="EventDay">
                <h1>Event Day - 1</h1>
                <div className="attendance">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        </>
    )
}