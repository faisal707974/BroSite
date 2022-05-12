import React from "react";
import Logo from '../../components/Logo/Logo'
import img from '../../assets/images/17.jpg'
import '../Fumigation/Fumigation.scss'
import TimeNow from "../../components/TimeNow/TimeNow";
import Navbar from "../../components/Navbar/Navbar";

export default function Fumigation() {
    return (
        <>
            <div className="fumigation">
                <div className="row">
                    <Logo broColor1={'#683ba4'} broColor2={'#565454'} />
                    <Navbar />
                </div>
                <div className="level1 row pt-5">
                    <div className="head-col col ">
                        <div className="row ">
                            <div className="head">
                                <div>
                                    <h1>Fumigation Period</h1>
                                    <div className="weeks">
                                        <h2>Week 1</h2>
                                        <h2>Week 2</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timenow">
                            <TimeNow />
                        </div>
                        <div className="row mock p-5">
                            <div className="col mock-col-one">
                                <h6 className="">Mock Interview <br /> will be held on</h6>
                            </div>
                            <div className="col">
                                <h6>21 May 2022</h6>
                                <h6>Tuesday</h6>
                            </div>
                            <h6 className="countdown">1 day to go</h6>
                        </div>
                    </div>
                    <div className="col">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="level2">

                </div>
            </div>
        </>
    )
}