import { CloseButton, Modal } from 'react-bootstrap'
import React, { useState, useRef } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from './canvasPreview'

export default function Cropper({ imgSrc, setImgSrc }) {

    const [modalShow, setModalShow] = useState(true)

    const [crop, setCrop] = useState()
    const [completedCrop, setCompletedCrop] = useState()
    const [aspect, setAspect] = useState(1 / 1)
    const [state,setState]= useState(null)

    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)

    if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
    ) {
        canvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            completedCrop,
            setState
        )
    }

    const toggleModal = () => {
        setModalShow(!modalShow)
    }

    const saveCrop = () => {
        console.log('ide save crop')
        // console.log(state)
        // setImgSrc =  state
        console.log(crop)
    }


    return (
        <>
            <Modal show={modalShow} onHide={toggleModal}>
                <Modal.Body>
                    <CloseButton onClick={toggleModal} />
                    {Boolean(imgSrc) && (
                        <ReactCrop
                            crop={crop}
                            onChange={(crop, percentCrop) => setCrop(crop)}
                            onComplete={(c) => setCompletedCrop(c)}
                            aspect={aspect}
                        >
                            <img
                                ref={imgRef}
                                alt="Crop me"
                                src={imgSrc}
                            />
                        </ReactCrop>
                    )}
                    <div>
                        {Boolean(completedCrop) && (
                            <canvas
                                ref={previewCanvasRef}
                                style={{
                                    border: '1px solid black',
                                    objectFit: 'contain',
                                    width: completedCrop.width,
                                    height: completedCrop.height,
                                }}
                            />
                        )}
                    </div>
                    <button onClick={saveCrop}>Crop</button>

                </Modal.Body>
            </Modal>
        </>
    )
}