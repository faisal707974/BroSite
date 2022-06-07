import React, { useEffect, useState } from "react";
import './Students.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AdvisorTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";
import axios from "axios";
import axiosInstance from "../../../axios";

export default function Students() {

    const [students, setStudents] = useState()
    useEffect(() => {
        async function getStudents() {

            const response = await axiosInstance.get('/advisor/students')
            setStudents(response.data)
        }
        getStudents()
    }, [])


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
                                                <td><img src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="" /></td>
                                                <td>{obj.Name}</td>
                                                <td>{obj.Domain}</td>
                                                <td>{obj.Week}</td>
                                                <td>5.6</td>
                                                <td>Subin</td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                    : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}