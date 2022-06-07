import React from "react";
import { useSelector } from 'react-redux'
import './personalDetails.scss'

export default function Personal_Details({ fields }) {


    const user = useSelector(state => state.Login.userInfo)
    const dob = user['Date of Birth']
    const format = dob
    // user['Date of Birth'] = format[0]
    console.log(format)

    return (
        <>
            <div className="row personal">
                <div className="col-lg-7 details">

                    <p>Name</p>
                    :<p>{user.Name}</p>

                    <p>Date of Birth</p>
                    :<p>{user['Date of Birth']}</p>

                    <p>Gender</p>
                    :<p>{user.Gender}</p>

                    <p>Address</p>
                    :<pre>{user.Address}</pre>

                    <p>District</p>
                    :<p>{user.District}</p>

                    <p>State</p>
                    :<p>{user.State}</p>

                    <p>Country</p>
                    :<p>{user.Country}</p>

                </div>
                <div className="col image">
                    <img src={user.Photo.url} alt="" />
                    <p><i className="fas fa-envelope"></i>{user.Email}</p>
                    <p><i className="fas fa-phone"></i>+91 8891707974</p>
                </div>
            </div>
        </>
    )
}