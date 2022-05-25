import React, {useState} from 'react'
import './Workshop.scss'
import Sidebar from '../../../components/Sidebar/Sidebar'
import PageHead from '../../../components/PageHead/PageHead'
import { ManagerTabs } from '../../../constants/PageTabs/Manager'
import ScheduledWrkshp from '../../../components/Manager/ScheduledWrkshp/ScheduledWrkshp'
import EventDay from '../../../components/Manager/EventDay/EventDay'

export default function Workshop({ status }) {

    return (
        <>
            <Sidebar pages={ManagerTabs} current={'Workshop'} />
            <div className='workshop'>
                <PageHead title={'Workshop'} />
                <div className="content">
                    {status === 'scheduled' ? <ScheduledWrkshp /> : <EventDay />}
                    <div className='not-scheduled'>

                    </div>

                </div>
            </div>
        </>
    )
}


