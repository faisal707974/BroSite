import React, { useState, useEffect, useMemo } from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideBarAction } from '../../redux/actions/sideBarAction.js'

export default function Sidebar({ pages, current }) {

    const [bar, setbar] = useState(false)

    const dispatch = useDispatch()
    const barStatus = useSelector((state)=>(state.SideBar.status))

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
                    <div className="down"></div>
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
                </div>
            </div>
            {/* <div className="body">
                <div className="body-card">
                
                </div>
            </div> */}
        </>
    )
}
