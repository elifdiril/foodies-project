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
        <div className='w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center relative'>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className='hidden'
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className='bg-[#59361c] text-[#fff] p-2 rounded-xl m-4 text-center w-40 mx-auto hover:opacity-60'
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image 
        </button>
      </div>
    </div>
  );
}