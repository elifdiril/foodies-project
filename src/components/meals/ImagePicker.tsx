'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }: { label: string; name: string }) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (imageInput.current) {
        imageInput.current.click();
      }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result) {
        setPickedImage(fileReader.result.toString());
      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <div className=''>
        <div className=''>
          {!pickedImage && <p>No image picked yet.</p>}
          
        </div>
        <input
          className=''
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className=''
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}