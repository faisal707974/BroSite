import React, { useState } from "react";
import './Review.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/PageHead/PageHead";

export default function Review() {
    const [section, setSection] = useState(1)

    let PendingTopics = [
        ' weekly tasks',
        'html',
        'css',
        'z-index'
    ]




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
                                        <li>one</li>
                                        <li>two</li>
                                        <li>two</li>
                                        <li>two</li>
                                        <li>two</li>
                                    </ol>
                                    : section === 2 ?
                                        <ol>
                                            <li>one</li>
                                            <li>two</li>
                                            <li>two</li>
                                            <li>two</li>
                                            <li>two</li>
                                        </ol>
                                        : section === 3 ?
                                            <p>Nothing learned this week</p>
                                            : null
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}