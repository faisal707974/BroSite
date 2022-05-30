import React from "react";
import './TechTasks.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export default function TechTasks() {
    return (
        <>
            <div className="TechTasks">
                <Sidebar pages={BrocampTabs} current={'Tasks-Tech'} />
                <div>
                    <PageHead title={'technical tasks'} />
                    
                    <div className="question">
                        <div><h3>1.&nbsp;&nbsp;</h3></div>
                        <h6>What is the difference between Comparison and Non-Comparison Sorting Algorithms?</h6>
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
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}