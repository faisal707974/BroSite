import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHead from "../../../components/General/PageHead/PageHead";
import { ManagerTabs } from "../../../constants/PageTabs/Manager";
import Container from '../../../components/Home/Home'

export default function Home() {
    return (
        <>
            <Sidebar pages={ManagerTabs} current={'Home'} />
            <div className='Home'>
                <PageHead title={'Manager'} />
                <Container />
            </div>
        </>
    )
}