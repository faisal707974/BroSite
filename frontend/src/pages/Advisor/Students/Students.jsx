import React, { useEffect, useState } from "react";
import './Students.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AdvisorTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";
import axiosInstance from "../../../axios";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Students() {

    const user = useSelector((state) => state.Login.userInfo)
    const [pendingTopicsModal, setPendingTopicsModal] = useState(false)
    const [topics, setTopics] = useState()
    const [currStudent, setCurrStudent] = useState()
    const [students, setStudents] = useState()
    const [pendingTopics, setPendingTopics] = useState()

    useEffect(() => {
        async function getStudents() {
            const response = await axiosInstance.get('/advisor/students')
            setStudents(response.data)
        }
        getStudents()
    }, [students])


    useEffect(() => {
        async function getPendingTopics() {
            if (currStudent) {
                const response = await axiosInstance.get('/advisor/students/pendingTopic/' + currStudent.id + '/' + currStudent.week)
                setPendingTopics(response.data)
            }
        }
        getPendingTopics()
    }, [pendingTopicsModal])


    let options = []
    for (let i = 1; i <= 24; i++) {
        options.push(i)
    }


    async function saveTopic() {
        const data = {
            Topic: topics,
            Student: currStudent.id,
            Advisor: user._id,
            Week: currStudent.week
        }
        const response = await axiosInstance.post('/advisor/students/pendingTopic', data)
        // setTopics(response.data.Topic)
        setPendingTopics([...pendingTopics, { Topic: response.data.Topic }])
    }

    async function weekChange(e, id) {
        console.log(e.target.value + '/' + id)
        const response = await axiosInstance.put('/advisor/students/changeWeek/' + e.target.value + '/' + id)
    }


    return (
        <>
            <div className="Students">
                <Sidebar pages={AdvisorTabs} current={'Students'} />
                <div>
                    <PageHead title={'Students'} />
                    <div className="content">

                        <table>
                            <thead>
                                <tr>
                                    <th>sl no.</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Domain</th>
                                    <th>Week</th>
                                    <th>Scores</th>
                                    <th>Interviewer</th>
                                    <th>Tasks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students ?
                                    students.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><img src={obj.Photo?.url} alt="" /></td>
                                                <td>{obj.Name}</td>
                                                <td>{obj.Domain}</td>
                                                <td>
                                                    <select name="" id="" value={obj.Week} onChange={(e) => weekChange(e, obj._id)}>
                                                        {options.map((num, index) => {
                                                            return (
                                                                <option key={index} value={num}>{num}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </td>
                                                <td>5.6</td>
                                                <td>Subin</td>
                                                <td onClick={() => { setPendingTopicsModal(true); setCurrStudent({ week: obj.Week, id: obj._id }) }}>Pending topics</td>
                                            </tr>
                                        )
                                    })
                                    : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={pendingTopicsModal} onHide={() => setPendingTopicsModal(false)} className='PendingTopicsAdvisor'>
                <Modal.Header>
                    <h5>Pending Topics</h5>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" type="text" onChange={(e) => setTopics(e.target.value)} />
                    <i className="fas fa-plus" onClick={saveTopic}></i>
                    <ol>
                        {pendingTopics &&
                            pendingTopics.map((obj) => {
                                return (
                                    <li>{obj.Topic}</li>
                                )
                            })}
                    </ol>
                </Modal.Body>
            </Modal>
        </>
    )
}