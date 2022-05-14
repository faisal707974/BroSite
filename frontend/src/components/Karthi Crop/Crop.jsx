import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
// import { Input } from '@mui/material';
import Button from '@mui/material/Button';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 30,
  pt: 4,
  px: 20,
  pb: 3,
};



function Crop(props) {
  const { result, setResult } = props;

  const [src, selectFile] = useState(null);
  const [image, setImage] = useState("");
  const [crop, setCrop] = useState({ aspect: 1 / 1 })

  const handleFileChange = e => {
    e.preventDefault();
    selectFile(URL.createObjectURL(e.target.files[0]))
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    selectFile(null)
    setImage("")
    setCrop({ aspect: 1 / 1 })
    setOpen(false);
  };

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image)
  }

  return (
    <div>
      <div>
        <p onClick={handleOpen}>hai</p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 800 }}>
            <input type='file' placeholder='image' onChange={handleFileChange} />




            {result && result ? (<div className="col-lg-12">
              <img src={result} alt="croped-version" className='image-fluid' />
            </div>) :
              (<div>{src &&
                <div className="col-lg-12">
                  <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop}>
                  <img
                                alt="Crop me"
                                src={src}
                            />
                  </ReactCrop>
                  <button className="btn-primary btn" onClick={getCroppedImg}>Crop Image</button>
                </div>
              }</div>)
            }
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </div>

    </div>
  )
}

export default Crop