import React, { useEffect, useState } from "react";
import './TechTasks.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";

import AceEditor from "react-ace";
import axios from "axios";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useSelector } from "react-redux";

export default function TechTasks() {

    // const user = useSelector((state) => state.Login.userInfo)
    const user = {
        Name: "m fai",
        Week: 1,
        password: "$2a$10$3I9vOYXVby30BfJFv5JK2uB1FhdfQ7nmkcKzTDFUQd5ESXc5zn05y",
        role: "BroCamp",
        _id: "629454ecca733971cd696c78",
    }

    const [questions, setQuestions] = useState()
    const [currQuestion, setCurrQuestion] = useState(0)
    useEffect(() => {
        async function getTechTasks() {
            const response = await axios.get('http://localhost:3001/brocamp/tech_tasks/' + user._id)
            setQuestions(response.data)
        }
        getTechTasks()
    }, [])

    function changeQuestion(value) {
        if (currQuestion === 0 && value === -1) {
            
        } else if (currQuestion === questions?.length - 1 && value === 1) {
        } else {
            setCurrQuestion(currQuestion + value)
        }
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
                        // onChange={onChange}
                        name="codeEditor"
                        editorProps={{ $blockScrolling: false }}
                    />

                    <div className="buttons">
                        <button onClick={()=>changeQuestion(-1)} >Previous</button>
                        <button onClick={()=>changeQuestion(1)} >Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}