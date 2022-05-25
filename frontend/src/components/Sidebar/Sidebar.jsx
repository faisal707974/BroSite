import React, { useState, useEffect, useMemo } from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideBarAction } from '../../redux/actions/sideBarAction.js'

export default function Sidebar({ pages, current }) {

    const [bar, setbar] = useState(false)

    const dispatch = useDispatch()
    const barStatus = useSelector((state) => (state.SideBar.status))
    const user = useSelector((state=>state.Login.userInfo?.Name))

    useEffect(() => {
        dispatch(sideBarAction())
    }, [bar])


    return (
        <>
            <div className={'page row ' + (barStatus ? 'bar-on' : 'bar-off')}>
                <div className='sidebar'>
                    <div className="top">
                        {pages.map((item, index) => {
                            return (
                                <Link to={item.link} key={index}>
                                    <i className={'fas ' + (item.icon) + (current == item.name ? ' active' : ' ')}></i>
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
                            <img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={'navbar-info' + (barStatus ? ' move' : '')}>
                    {pages.map((item, index) => {
                        return (
                            <Link to={item.link} key={index}>
                                <h6 className={'tabs' + (current == item.name ? ' active' : ' ')} >{item.name}</h6>
                            </Link>
                        )
                    })
                    }
                    <div className='profile'>
                        <hr />
                        <h6>{user?user:'profile name'}</h6>
                        <div>
                            <p><span><i className='fas fa-user'></i></span>profile</p>
                            <p><span><i className='fas fa-sign-out'></i></span>logout</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="body">
                <div className="body-card">
                
                </div>
            </div> */}
        </>
    )
}
