import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './Workshop.scss'
import PageHead from '../../../components/PageHead/PageHead'
import { ManagerTabs } from '../../../constants/PageTabs/Manager'

export default function Workshop() {

    return (
        <>
            <Sidebar pages={ManagerTabs} current={'Workshop'} />
            <div className='workshop'>
                <PageHead title={'Workshop'} />
            </div>
        </>
    )
}


