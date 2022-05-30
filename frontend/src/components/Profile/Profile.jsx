import React, { useState } from "react";
import './Profile.scss'
import { Modal } from "react-bootstrap";
import Personal_Details from "./components/personalDetails";

export default function Profile({ profileModal, setProfileModal }) {

    let options = [
        'Personal details',
        'Domain',
        'Change password',
        'Leave request',
        'Feedback'
    ]
    const [option, setOption] = useState(options[0])

    let fields = [
        'Name',
        'Date of Birth',
        'Gender',
        'Address',
        'District',
        'State',
        'Country'
    ]

    return (
        <>
            <Modal show={profileModal} onHide={() => setProfileModal(false)} className={'profileModal'}>
                <Modal.Header>
                    <h5>Profile</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-3 sideoptions">
                            {
                                options.map((obj, index) => {
                                    return (
                                        <p key={index} className={obj === option ? "active" : null} onClick={() => setOption(obj)}>{obj}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="col">
                            {option === 'Personal details' ?
                                <Personal_Details fields={fields} />
                                : null}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}