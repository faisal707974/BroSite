import React from "react";
import './Review.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHead from "../../../components/General/PageHead/PageHead";
import { AdvisorTabs } from "../../../constants/PageTabs/Manager";

export default function Review() {
    return (
        <>
            <div className="Review">
                <Sidebar pages={AdvisorTabs} current={'Review'} />
                <div>
                    <PageHead title={'Review'} />
                    <div className="platform">

                    </div>
                </div>
            </div>
        </>
    )
}