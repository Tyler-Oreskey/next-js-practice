'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInput = useRef(null);

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };  

        fileReader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>Please pick an image.</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected" fill />}
            </div>
            <input 
                className={classes.input} 
                type="file" 
                id={name} 
                name={name} 
                accept="image/png, image/jpeg" 
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button
                className={classes.button}
                type="button"
                onClick={handlePickClick}
            >
                Pick Image
            </button>
        </div>
    </div>;
}