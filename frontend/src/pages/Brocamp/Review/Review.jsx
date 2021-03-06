import React, { useState, useEffect, useRef } from "react";
import './Review.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";
import axios from "axios";
import axiosInstance from "../../../axios";
import { useSelector } from "react-redux";

export default function Review() {
    const [section, setSection] = useState(1)

    const user = useSelector((state) => state.Login.userInfo)

    // let PendingTopics = [
    //     ' weekly tasks',
    //     'html',
    //     'css',
    //     'z-index'
    // ]

    const [input, setInput] = useState()
    const learnedTodayInput = useRef()
    async function saveTask() {
        learnedTodayInput.current.value = ''
        const response = await axiosInstance.post('/brocamp/review/learnedtoday', { topic: input })
    }

    const [learnedToday, setLearnedToday] = useState()
    useEffect(() => {
        async function getLearnedToday() {
            const response = await axiosInstance.get('/brocamp/review/learnedtoday')
            setLearnedToday(response.data)
        }
        getLearnedToday()
    })

    async function deleteLearnedToday(id) {
        const response = await axiosInstance.delete('/brocamp/review/learnedtoday/' + id)
    }

    useEffect(() => {
        async function getLearnedThisWeek() {
            // const resoponse = await axiosInstance.get('/brocamp/review/learnedThisWeek')
        }
        getLearnedThisWeek()
    })

    const [pendingTopics, setPendingTopics] = useState()
    useEffect(() => {
        async function getPendingTopics() {
            const response = await axiosInstance.get('/brocamp/review/pendingtopics/' + user._id + '/' + user.Week)
            setPendingTopics(response.data)
        }
        getPendingTopics()
    })
    // console.log(pendingTopics)

    const [learnedThisWeek, setLearnedThisWeek] = useState()

    return (
        <>
            <div className="Review">
                <Sidebar pages={BrocampTabs} current={'Review'} />
                <div className="content">
                    <PageHead title={'Weekly Review'} />
                    <div className="main row">
                        <div className="side col-lg-4">
                            <h6 className={section === 1 ? 'active' : null} onClick={() => setSection(1)}>Pending Topics</h6>
                            <h6 className={section === 2 ? 'active' : null} onClick={() => setSection(2)}>Learned Today</h6>
                            <h6 className={section === 3 ? 'active' : null} onClick={() => setSection(3)}>Learned this Week</h6>
                            <br />
                            <br />
                            <br />
                            <div className="nextReview">
                                <h4>Next Review</h4>
                                <h3>23-Apr-2022</h3>
                                <h5>2 days to go</h5>
                            </div>
                        </div>
                        <div className="center col">
                            {
                                section === 1 ?
                                    <ol>
                                        {pendingTopics &&
                                            pendingTopics.map((obj, index) => {
                                                return (
                                                    <li key={index}>{obj.Topic}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                    : section === 2 ?
                                        <div className="learnedToday">
                                            <div>
                                                <input ref={learnedTodayInput} type="text" onBlur={(e) => setInput(e.target.value)} />
                                                <button onClick={saveTask}>Insert</button>
                                            </div>
                                            <ol>
                                                {/* <hr />
                                                <hr /> */}
                                                {learnedToday ?
                                                    learnedToday.map((obj, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <li>{obj.topic}
                                                                    <span className="closeButton">
                                                                        <i className="fas fa-close" onClick={() => deleteLearnedToday(obj._id)} />
                                                                    </span></li>
                                                            </div>
                                                        )
                                                    }) : null
                                                }
                                            </ol>
                                        </div>
                                        : section === 3 ?
                                            learnedThisWeek ?
                                                learnedThisWeek.map((obj, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <li>{obj.topic}</li>
                                                        </div>
                                                    )
                                                }) : null
                                            : null
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}