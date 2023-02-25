/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { storage, db } from "../../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import Compressor from "compressorjs";
import {
  primaryButtonStyle,
  secondaryButtonStyle
} from "../../Utils/constants";
import Thumbnail from "../../Photography/Components/Thumbnail";

export const UploadPhotos = () => {
  const { profile } = useSelector((state) => state.profileReducer);
  const [fileName, setFile] = useState([]);
  const [uploadProgress, setProgress] = useState(0);
  const history = useNavigate();
  let test = "";
  const handleChange = (evt) => {
    const images = evt.target.files;
    test = () => {
      return <h1>Nitin</h1>;
    };
    Object.entries(images).forEach((image) => {
      return <Thumbnail src={URL.createObjectURL(image[1])} alt='Decription' />;

      // const output = new Image("200");
      // console.log(URL.createObjectURL(image[1]));
      // output.src = URL.createObjectURL(image[1]);
      // document.querySelector("#preview").appendChild(output);
      // output.onload = function () {
      //   URL.revokeObjectURL(output.src); // free memory
      // };
    });

    console.log(images);
    setFile(images);
  };
  const handleCancel = () => {
    history("/");
  };

  const generateThumbnail = (folderName, file) => {
    new Compressor(file, {
      quality: 1,
      width: 600,
      success(result) {
        uploadFileHadler(folderName, result);
      },
      error(err) {
        console.log(err.message);
      }
    });
  };

  const LoadImages = async () => {
    const querySnapShot = await getDocs(collection(db, "images"));

    querySnapShot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  };

  const uploadFiles = () => {
    if (fileName.length === 0) {
      alert("Import File");
    } else {
      // const thumbnailArr = []

      // forEach()
      // generateThumbnail()
      for (let i = 0; i < fileName.length; i++) {
        uploadFileHadler("images", fileName[i]);
        generateThumbnail("thumbnail", fileName[i]);
      }
      //uploadFileHadler(fileName);
    }
  };

  const uploadFileHadler = (folderLocation, file) => {
    //    console.log(file);
    const storageRef = ref(storage, `${folderLocation}/${file.name}`);
    // console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          const imageRef = doc(db, folderLocation, file.name);
          setDoc(imageRef, {
            imgUrl: downloadURL
          });
        });
      }
    );
  };

  return (
    <div>
      <img id='output' width='200px' />
      <div className='md:basis-3/4 md:pl-12 sm:pl-0  sm:w-full'>
        <input
          multiple
          type='file'
          accept='/image/*'
          onChange={(e) => handleChange(e)}
        />
        <button className={secondaryButtonStyle} onClick={() => handleCancel()}>
          Cancel
        </button>
        <button className={primaryButtonStyle} onClick={() => uploadFiles()}>
          Submit
        </button>
      </div>

      <span id='preview' className='gallery'>
        {test}
      </span>
    </div>
  );
};
