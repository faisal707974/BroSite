import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axiosInstance from '../axios'
import { useDispatch } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../redux/constants/loginConstant";

export default function ProtectedRoute({ children }) {

    const { isLoggedIn } = useSelector((state) => state.Login)

    const dispatch = useDispatch()

    const user = localStorage.getItem('userInfo')


    useEffect(() => {
        async function getUser() {
            const response = await axiosInstance.get('/loginedUser/' + user)
            // console.log(response.data)
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
        }

        getUser()
    }, [])

    if (user) {
        return children
    } else {
        return <Navigate to="/login" replace />;
    }
}