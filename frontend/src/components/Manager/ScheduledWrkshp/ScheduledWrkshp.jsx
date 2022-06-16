import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import DateCard from "../DateCard/DateCard";
import HexaOptions from "../HexaOptions/HexaOptions";
import './ScheduledWrkshp.scss'
import Input from '../../RegistrationInput/RegistrationInput'
import Select from '../../selectInput/selectInput'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from '../../../assets/images/19.png'
import { useDispatch, useSelector } from "react-redux";

import { save_current_workshop_id_to_store } from "../../../Utils/Manager";
import axiosInstance from "../../../axios";

export default function ScheduledWrkshp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const workshopId = useSelector((state)=>state.WorkshopId)

    const [modal, setModal] = useState(false)
    const [schedules, setSchedules] = useState()
    const [currSchedule, setCurrSchedule] = useState(0)

    // --------------------------------------------------------------- creating workshop hexagon options

    const options = [
        { title: 'Batch', color: '#557f8d' },
        { title: 'Seats available', color: '#00adb4' },
        { title: 'filled seats', color: '#34789b' },
        { title: 'Event day', color: '#368083', link: '/manager/workshop/event_day/'+workshopId },
        { title: 'Change venue', color: '#727272' },
        { title: 'Change schedule', color: '#ab52a2' },
        { title: 'Add new schedule', color: '#ae3268', click: () => setModal(!modal) },
        { title: 'Cancel schedule', color: '#669105', click: deleteSchedule },
        { gfd: 'fx' }
    ]
    const len = options.length
    const firstrow = options.splice(0, len / 2)
    const secondrow = options.splice(0, len / 2 + 1)

    // --------------------------------------------------------------- creating new schedule

    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });
    const onSubmit = async (data) => {
        setModal(false)
        const response = await axiosInstance.post('/manager/newBatch', data)
    }

    // --------------------------------------------------------------- getting schedules from backend

    useEffect(() => {
        const getSchedules = async () => {
            const response = await axiosInstance.get('/manager/schedules')
            if (response.data.length != 0) {
                setSchedules(response.data)
            } else {
                setSchedules(null)
            }
        }
        getSchedules()
    }, [modal])

    // --------------------------------------------------------------- sending current workshop id to store

    save_current_workshop_id_to_store(schedules, currSchedule, dispatch)

    // --------------------------------------------------------------- creating 2 other days of workshop

    let day1;
    let day2;
    let day3;
    let current;
    if (schedules) {
        current = schedules[currSchedule]
        const d = current?.Date
        day1 = new Date(d.Year, d.Month - 1, d.Day)
        day2 = new Date(day1)
        day2.setDate(day1.getDate() + 1)
        day3 = new Date(day1)
        day3.setDate(day1.getDate() + 2)
    }
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // --------------------------------------------------------------- deleting a schedule

    async function deleteSchedule() {
        const id = schedules[currSchedule]._id
        const response = await axiosInstance.post('/manager/delete_schedules', {}, { params: { id } })
        if (response.status == 200) {
            navigate('/manager/workshop')
        }
    }

    return (
        <>
            <div className="ScheduledWrkshp">
                <div>
                    <h3>{current?.Venue}</h3>
                </div>
                <div>
                    <h6>10 days to go</h6>
                </div>
                <div className="display">
                    {
                        schedules ?
                            <div className='DateCards'>
                                <i className="fas fa-angle-left" onClick={() => {
                                    return currSchedule == 0 ? null : setCurrSchedule(currSchedule - 1)
                                }}
                                ></i>
                                <DateCard date={day1.getDate()} month={m[day1.getMonth()]} day={w[day1.getDay()]} />
                                <DateCard date={day2.getDate()} month={m[day2.getMonth()]} day={w[day2.getDay()]} />
                                <DateCard date={day3.getDate()} month={m[day3.getMonth()]} day={w[day3.getDay()]} />
                                <i className="fas fa-angle-right" onClick={() => {
                                    return currSchedule === schedules.length - 1 ? null : setCurrSchedule(currSchedule + 1)
                                }}
                                ></i>
                            </div>
                            :
                            <div className="empty_display">
                                <img src={img} alt="" />
                                <div>
                                    <h6>No workshops scheduled</h6>
                                </div>
                            </div>
                    }
                </div>

                <div className="line line-one">
                    <div className="column col-one">
                        {firstrow.map((Obj, index) => {
                            return (
                                <div key={index}>
                                    <HexaOptions text={Obj.title} color={Obj.color} link={Obj.link} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="line line-two">
                    <div className="column col-two">
                        {secondrow.map((Obj, index) => {
                            return (
                                <div key={index}>
                                    <HexaOptions text={Obj.title} color={Obj.color} link={Obj.link} click={Obj.click} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Modal show={modal} onHide={() => setModal(false)}>
                <Modal.Header>
                    <h4>Declare workshop</h4>
                </Modal.Header>
                <Modal.Body>

                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <Input type='text' label='Venue' required register={register} errors={errors} rules={{ required: true }} />

                        <Select name={'BroCamp'} required
                            register={register} errors={errors} rules={{ required: true }} options={['Kochi', 'Calicut']} />

                        <Input type='date' label='Date' required register={register} errors={errors} rules={{ required: true }} />

                        <Input type='text' label='Batch' required register={register} errors={errors} rules={{ required: true }} />

                        <Input type='text' label='Seats' required register={register} errors={errors} rules={{ required: true }} />

                        <button type="submit">Save</button>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    )
}