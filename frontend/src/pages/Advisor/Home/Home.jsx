import React from "react";
import './Home.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AdvisorTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";

export default function Home() {
    return (
        <>
            <div className="Home">
                <Sidebar pages={AdvisorTabs} current={'Home'} />
                <div>
                    <PageHead title={'Advisor'} />
                </div>
            </div>
        </>
    )
}