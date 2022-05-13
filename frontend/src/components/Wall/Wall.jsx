import React from 'react'
import '../Wall/Wall.scss'
import img from '../../assets/images/13.png'

function Wall({img}) {
    return (
        <>
            {/* <div className="col"> */}
                <img className='mx-auto d-block' src={img} alt="" />
            {/* </div> */}
        </>
    )
}

Wall.defaultProps={
    img : img
}

export default Wall
