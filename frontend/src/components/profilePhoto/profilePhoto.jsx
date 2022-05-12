import React, { useState } from 'react'
import './profilePhoto.css'
import Cropper from '../Cropper/Cropper';


export default function ({ imgSrc, setImgSrc }) {

    const [cropper, setCropper] = useState(false)

    const photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader()
        reader.addEventListener('load', () =>
            setImgSrc(reader.result.toString() || ''),
        )
        reader.readAsDataURL(e.target.files[0])
        { e.target.files[0] && setCropper(true) }




        // const imageFile = e.target.files[0]
        // setImgSrc(URL.createObjectURL(imageFile))

        // const reader = new FileReader();
        // const file = e.target.files[0];
        // reader.onloadend = () => {
        //     setImgSrc({
        //         file: file,
        //         imagePreviewUrl: reader.result.toString()
        //     });
        // }
        // reader.readAsDataURL(file);
    }



    return (
        <>
            <div className='PhotoUpload'>
                <div className='PhotoUpload-Inner'>
                    <label htmlFor="upload_image" className='fas' >
                        <div className='img-upload'>
                            <img src={imgSrc} alt="" />
                        </div>
                        <input type="file" accept='image/*' onChange={photoUpload} name="crop_image" className="crop_image" id="upload_image" />
                    </label>
                </div>
            </div>
            {cropper && <Cropper imgSrc={imgSrc} setImgSrc={setImgSrc} setCropper={setCropper} />}
        </>
    )
}