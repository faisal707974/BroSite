import React, { useEffect } from "react";
import './Brocamp.scss'
import axios from "axios";
// import Logo from '../../components/Logo/Logo'
// import img from '../../assets/images/17.jpg'
// import TimeNow from "../../components/TimeNow/TimeNow";
// import Navbar from "../../components/Navbar/Navbar";
// import Wall from "../../components/Wall/Wall";

import Sidebar from "../../../components/Sidebar/Sidebar";
import { BrocampTabs } from "../../../constants/PageTabs/Manager";
import Container from '../../../components/Home/Home'
import PageHead from "../../../components/General/PageHead/PageHead";


export default function Brocamp() {

    return (
        <>
            <div className="brocamp">
                <Sidebar pages={BrocampTabs} current={'Home'} />
                <div>
                    <PageHead title={'BroCamp'} />
                    <Container />
                </div>
            </div>
        </>
    )
}