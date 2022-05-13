import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHead from "../../../components/PageHead/PageHead";
import { ManagerTabs } from "../../../constants/PageTabs/Manager";

export default function Home() {
    return (
        <>
            <Sidebar pages={ManagerTabs} current={'Home'} />
            <div className='Home'>
                <PageHead title={'Manager'} />
            </div>
        </>
    )
}