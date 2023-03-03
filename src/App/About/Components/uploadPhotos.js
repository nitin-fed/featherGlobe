/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { storage, db } from "../../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import Compressor from "compressorjs";
import {
  greenButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle
} from "../../Utils/constants";
import Thumbnail from "../../Photography/Components/Thumbnail";
import { TextInputField } from "../../Components/TextInputField";
import { Textarea } from "react-bootstrap-icons";
import { TextArea } from "../../Components/TextArea";

export const UploadPhotos = () => {
  const { profile } = useSelector((state) => state.profileReducer);
  const [fileName, setFile] = useState([]);
  const [uploadProgress, setProgress] = useState(0);
  const history = useNavigate();
  let test = "";

  const handleChange = (evt) => {
    const images = evt.target.files;

    test = <h1>Nitin</h1>;

    // Object.entries(images).forEach((image) => {
    //   return <Thumbnail src={URL.createObjectURL(image[1])} alt='Decription' />;

    //   // const output = new Image("200");
    //   // console.log(URL.createObjectURL(image[1]));
    //   // output.src = URL.createObjectURL(image[1]);
    //   // document.querySelector("#preview").appendChild(output);
    //   // output.onload = function () {
    //   //   URL.revokeObjectURL(output.src); // free memory
    //   // };
    // });

    setFile(images);
  };

  useEffect(() => {
    if (uploadProgress > 0)
      document.querySelector("#loader").style.width = uploadProgress + "%";
    console.log(
      document.querySelector("#loader") &&
        document.querySelector("#loader").style.width,
      uploadProgress + "%"
    );
  }, [uploadProgress]);

  const handleCancel = () => {
    history("/");
  };

  const generateThumbnail = (folderName, file, quality) => {
    new Compressor(file, {
      quality: quality,
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
        generateThumbnail("thumbnail", fileName[i], 1);
        generateThumbnail("lowres", fileName[i], 0.1);
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
    <div className='rounded-lg bg-gray-100  border border-gray-300 p-6 m-auto  '>
      <img id='output' width='200px' />

      <div className='md:flex lg:flex'>
        <div className='flex-none '>
          {/* <input
          multiple
          type='file'
          accept='/image/*'
          onChange={(e) => handleChange(e)}
        /> */}

          <div className={`inputWrapper ${greenButtonStyle}`}>
            Browse Photos
            <input
              label='Browse'
              className='fileInput'
              name='file1'
              multiple
              type='file'
              accept='/image/*'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='flex-auto w-64 md:pl-8 text-right pr-2.5'>
          <button
            className={secondaryButtonStyle}
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button className={primaryButtonStyle} onClick={() => uploadFiles()}>
            Submit
          </button>
        </div>
      </div>

      <span>
        {Object.entries(fileName).map(([key, value]) => {
          return (
            <>
              <div className='flex border  rounded-lg bg-white  border border-gray-300 p-6 mt-6 '>
                <div className='flex-none '>
                  <div id='loader' className='bg-gray-500 w-0'></div>
                  <img
                    src={URL.createObjectURL(value)}
                    alt='Decription'
                    width='400'
                    className=' rounded-lg'
                  />
                </div>
                <div className='flex-auto w-64 pl-8'>
                  <TextInputField
                    label='Title'
                    kind='text'
                    // ref={userNameRef}
                    value=''
                    // isRequired={true}
                    validation={["required", "min"]}
                  />
                  <TextArea
                    label='Description'
                    kind='text'
                    value=''
                    validation={[""]}
                  />
                </div>
              </div>
            </>
          );
        })}
      </span>
    </div>
  );
};
