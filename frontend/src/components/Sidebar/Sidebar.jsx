import React, { useState, useEffect } from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideBarAction } from '../../redux/actions/sideBarAction.js'
import Profile from '../Profile/Profile'
import { USER_LOGOUT } from '../../redux/constants/loginConstant'

export default function Sidebar({ pages, current }) {

    const [bar, setbar] = useState(false)
    const [profileModal, setProfileModal] = useState(false)

    const dispatch = useDispatch()
    const barStatus = useSelector((state) => (state.SideBar.status))
    const userInfo = useSelector((state => state.Login.userInfo))

    useEffect(() => {
        dispatch(sideBarAction())
    }, [bar])

    function userLogout() {
        dispatch({ type: USER_LOGOUT })
        dispatch(sideBarAction())
        localStorage.removeItem('userInfo')
    }


    return (
        <>
            <div className={'page row ' + (barStatus ? 'bar-on' : 'bar-off')}>
                <div className='sidebar'>
                    <div className="top">
                        {pages.map((item, index) => {
                            return (
                                <Link to={item.link} key={index}>
                                    <i className={'fas ' + (item.icon) + (current === item.name ? ' active' : ' ')}></i>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='arrow'>
                        <div className='cols'></div>
                        <div className='cols'></div>
                        <div className='shape'>
                            <i className={'fas ' + (barStatus ? 'fa-angle-double-left' : 'fa-angle-double-right')} onClick={() => { setbar(!bar) }}></i>
                        </div>
                    </div>
                    <div className="down">
                        <div className='profilePic'>
                            <img src={userInfo?.Photo?.url} alt="" />
                        </div>
                    </div>
                </div>
                <div className={'navbar-info' + (barStatus ? ' move' : '')}>
                    {pages.map((item, index) => {
                        return (
                            <Link to={item.link} key={index}>
                                <h6 className={'tabs' + (current === item.name ? ' active' : ' ')} >{item.name}</h6>
                            </Link>
                        )
                    })
                    }
                    <div className='profile'>
                        <hr />
                        <h6>{userInfo ? userInfo.Name : 'profile name'}</h6>
                        <div>
                            <p onClick={() => { dispatch(sideBarAction()); setProfileModal(true) }}><span><i className='fas fa-user'></i></span>profile</p>
                            <p onClick={() => userLogout()}><span><i className='fas fa-sign-out'></i></span>logout</p>
                        </div>
                    </div>
                </div>
                <Profile profileModal={profileModal} setProfileModal={setProfileModal} />
            </div>
            {/* <div className="body">
                <div className="body-card">
                
                </div>
            </div> */}

        </>
    )
}
