import React, { useEffect, useState } from "react";
import './TechTasks.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";
import axiosInstance from "../../../axios";

import AceEditor from "react-ace";
import axios from "axios";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useSelector } from "react-redux";

export default function TechTasks() {

    const user = useSelector((state) => state.Login.userInfo)

    const [questions, setQuestions] = useState()
    const [currQuestion, setCurrQuestion] = useState(0)
    const [currAnswer, setCurrAnswer] = useState()
    const [answers, setAnswers] = useState()

    useEffect(() => {
        async function getTechTasks() {
            const response = await axios.get('http://localhost:3001/brocamp/tech_tasks/' + user?._id)
            setQuestions(response.data)
        }
        getTechTasks()
    }, [user])

    useEffect(() => {
        async function getAnswers() {
            const response = await axiosInstance.get('/brocamp/techTasks/answers/' + user?._id + '/' + user?.Week)
            setAnswers(response.data)
        }
        getAnswers()
    }, [currQuestion, user])

    useEffect(() => {
        if (answers && questions) {
            answers.forEach((obj) => {
                if (questions[currQuestion]._id === obj.Question) {
                    setCurrAnswer(obj.Answer)
                }
                else {
                }
            })
        }
    }, [answers, currQuestion])

    async function changeQuestion(value) {
        if (currQuestion === 0 && value === -1) {
        } else if (currQuestion === questions?.length - 1 && value === 1) {
        } else {
            setCurrQuestion(currQuestion + value)
        }
        console.log(value)
        if (value === 1) {
            console.log(value)
            const data = {
                Answer: currAnswer || '',
                User: user._id,
                Question: questions[currQuestion]._id,
                Week: user.Week
            }
            try {
                const response = await axiosInstance.post('/brocamp/techTasks/answers', data)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    function answerEventHandler(e) {
        setCurrAnswer(e)
    }




    return (
        <>
            <div className="TechTasks">
                <Sidebar pages={BrocampTabs} current={'Tasks-Tech'} />
                <div>
                    <PageHead title={'technical tasks'} />

                    <div className="question">
                        <div><h3>{currQuestion + 1}.&nbsp;&nbsp;</h3></div>
                        {questions ?
                            <h6>{questions[currQuestion].Question}</h6>
                            : null
                        }
                    </div>
                    <AceEditor
                        placeholder="Enter your answer here"
                        mode="javascript"
                        theme="twilight"
                        fontSize={16}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        onChange={answerEventHandler}
                        name="codeEditor"
                        editorProps={{ $blockScrolling: false }}
                        value={currAnswer}
                    />


                    <div className="buttons">
                        <button onClick={() => changeQuestion(-1)} >Previous</button>
                        <button onClick={() => changeQuestion(1)} >Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}