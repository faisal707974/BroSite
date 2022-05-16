import { CloseButton, Modal } from 'react-bootstrap'
import React, { useState, useRef } from 'react'

import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from './canvasPreview'

export default function Cropper({ imgSrc, setResult }) {

    const [modalShow, setModalShow] = useState(true)
    const toggleModal = () => {
        setModalShow(!modalShow)
    }

    const [crop, setCrop] = useState()
    const [completedCrop, setCompletedCrop] = useState()
    const aspect = 1 / 1

    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)

    if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop)
            .then((result) => {
                setResult(result)
            })
    }

    return (
        <>
            <Modal show={modalShow} onHide={toggleModal}>
                <Modal.Body>
                    <CloseButton onClick={toggleModal} />

                    {Boolean(imgSrc) && (
                        <ReactCrop crop={crop} onChange={setCrop} onComplete={(c) => setCompletedCrop(c)} aspect={aspect} >
                            <img ref={imgRef} alt="Crop me" src={imgSrc} />
                        </ReactCrop>
                    )}
                    <div>
                        {Boolean(completedCrop) && (
                            <canvas ref={previewCanvasRef} style={{
                                border: '1px solid black',
                                objectFit: 'contain',
                                width: completedCrop.width,
                                height: completedCrop.height,
                            }} />
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}