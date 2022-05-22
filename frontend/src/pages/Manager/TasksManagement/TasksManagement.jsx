import React, { useEffect, useState } from "react";
import './TasksManagement.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHead from "../../../components/PageHead/PageHead";
import { ManagerTabs } from "../../../constants/PageTabs/Manager";
import { Modal } from "react-bootstrap";
import Input from "../../../components/RegistrationInput/RegistrationInput";
import { useForm } from 'react-hook-form';
import axios from 'axios'

export default function TasksManagement() {

    const [modal, setModal] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });

    async function onSubmit(data) {
        const response = await axios.post('http://localhost:3001/manager/tasks', data)
        console.log({ response })
    }

    const [domain, setDomain] = useState()
    const [tasks, setTasks] = useState()
    const [currentTasks, setCurrentTasks] = useState()

    useEffect(() => {
        async function getTasks() {
            const response = await axios.get('http://localhost:3001/manager/tasks')
            setTasks(response.data)
        }
        getTasks()
    }, [])

    useEffect(() => { 
        if (tasks && domain === undefined) {
            setDomain(tasks[0]._id)
        }
        if (domain) {
            tasks.forEach((obj) => {
                if (obj._id === domain) {
                    setCurrentTasks(obj.data)
                }
            })
        }
    }, [tasks, domain])
    if(currentTasks){
        currentTasks.sort((a,b)=>(a.week>b.week)? 1 : -1)
    }
    return (
        <>
            <Sidebar pages={ManagerTabs} current={'Tasks Management'} />
            <div className="TasksManagement">
                <span className="addTask" onClick={() => setModal(true)}>Add new task</span>
                <PageHead title={'tasks Management'} />
                <div className="content">
                    <div className="tabs">
                        {
                            tasks ? tasks.map((obj, index) => {
                                return (
                                    <span key={index} onClick={() => { setDomain(obj._id) }}>{obj._id}</span>
                                )
                            }) : null
                        }
                    </div>
                    {
                        currentTasks ? currentTasks.map((week, ind) => {
                            return (
                                <div key={ind}>
                                    <div className="weeks">
                                        <div className="week col">
                                            <h5>Week {week.week}</h5>
                                        </div>
                                        <div className="questions">
                                            <table>
                                                <tbody>
                                                    {
                                                        currentTasks[ind].Questions.map((obj, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{index + 1}. </td>
                                                                    <td>{obj}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null
                    }
                </div>
                <Modal show={modal} onHide={() => setModal(false)}>
                    <Modal.Header>
                        <h3>Add new task</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Input type={'text'} name={'Domain'} label='Domain' required
                                register={register} errors={errors} rules={{ required: true }} />

                            <Input type={'text'} name={'Week'} label='Week' required
                                register={register} errors={errors} rules={{ required: true }} />

                            <Input type={'text'} name={'Question'} label='Question' required
                                register={register} errors={errors} rules={{ required: true }} />

                            <input type="submit" />

                        </form>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}