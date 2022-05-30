import React from "react";

export default function Personal_Details({fields}) {
    return (
        <>
            <div className="row personal">
                <div className="col-lg-7 titles">
                    {fields.map((obj, index) => {
                        return (
                            <table key={index}>
                                <tr>
                                    <td><p>{obj}</p></td>
                                    <td><p>: Name</p></td>
                                </tr>
                            </table>
                        )
                    })}
                </div>
                <div className="col image">
                    <img src="https://wtspdp.com/wp-content/uploads/2021/04/Whatsapp-dp-statuis-dp-ote3-23-1024x1024.jpg?is-pending-load=1" alt="" />
                    <p><i className="fas fa-envelope"></i>faisalmuhammed@gmail.com</p>
                    <p><i className="fas fa-phone"></i>+91 8891707974</p>
                </div>
            </div>
        </>
    )
}