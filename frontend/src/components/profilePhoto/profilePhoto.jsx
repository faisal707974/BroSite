import React, { useEffect, useState } from 'react'
import './profilePhoto.css'
import Cropper from '../Cropper/Cropper';


export default function ({ imgSrc, setImgSrc, setCroppedPhoto }) {

    const [cropper, setCropper] = useState(false)
    const [result, setResult] = useState('https://raw.githubusercontent.com/OlgaKoplik/CodePen/master/profile.jpg')
    const [photoErr, setPhotoErr] = useState()

    const photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader()
        reader.addEventListener('load', () =>
            setImgSrc(reader.result.toString() || ''),
        )
        reader.readAsDataURL(e.target.files[0])
        { e.target.files[0] && setCropper(true) }
        setPhotoErr()
    }

    useEffect(() => {
        setCroppedPhoto(result)
    }, [result])

    return (
        <>
            <div className='PhotoUpload'>
                <div className='PhotoUpload-Inner'>
                    <label htmlFor="photo" className='fas' >
                        <div className='img-upload'>
                            <img src={result} alt="" />
                        </div>
                        <input type="file" accept='image/*' onChange={photoUpload} name={'photo'} className="photo" id="photo"  onInvalid={() => { setPhotoErr('Upload your photo') }} />
                    </label>
                </div>
            </div>
            {photoErr &&
                <div className='photoErr'>
                    <p>{photoErr}</p>
                </div>
            }
            {cropper && <Cropper imgSrc={imgSrc} setResult={setResult} />}
        </>
    )
}