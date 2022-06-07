import React from "react";
import './Home.scss'
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AdvisorTabs } from "../../../constants/PageTabs/Manager";
import PageHead from "../../../components/General/PageHead/PageHead";
import Container from '../../../components/Home/Home'

export default function Home() {
    return (
        <>
            <div className="Home">
                <Sidebar pages={AdvisorTabs} current={'Home'} />
                <div>
                    <PageHead title={'Advisor'} />
                    <Container />
                </div>
            </div>
        </>
    )
}