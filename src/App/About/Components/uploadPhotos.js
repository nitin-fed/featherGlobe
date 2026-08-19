/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  greenButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../../Utils/constants";
import Thumbnail from "../../Photography/Components/Thumbnail";
import { TextInputField } from "../../Components/TextInputField";
import { Textarea } from "react-bootstrap-icons";
import { TextArea } from "../../Components/TextArea";
import axios from "axios";

export const UploadPhotos = () => {
  const { profile } = useSelector((state) => state.profileReducer);
  const [fileName, setFile] = useState([]);
  const [uploadProgress, setProgress] = useState(0);
  const history = useNavigate();
  let test = "";

  const handleChange = (evt) => {
    const images = evt.target.files;

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
    if (uploadProgress > 0) {
      document.querySelector("#loader").style.width = uploadProgress + "%";
    } else if (uploadProgress === 100) {
      history.push("/photography");
    }
  }, [uploadProgress]);

  const handleCancel = () => {
    history("/");
  };

  const uploadPhotoOnNode = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/upload", fileName[0], {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getPhotos = () => {
    axios
      .get("http://localhost:3001/getPhotos")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        method="POST"
        action="http://localhost:3001/upload"
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="image"
          label="Browseeee"
          placeholder="select Image"
        />
        <button type="submit" onClick={(e) => uploadPhotoOnNode(e)}>
          Submit
        </button>
      </form>

      <hr />

      <div className="md:rounded-lg md:bg-gray-100  md:border md:border-gray-300 md:p-6 md:m-auto  ">
        <img id="output" width="200px" alt="test" />

        <div className="md:flex lg:flex">
          <div className="flex-none ">
            {/* <input
          multiple
          type='file'
          accept='/image/*'
          onChange={(e) => handleChange(e)}
        /> */}

            <button onClick={getPhotos}>Get Photos</button>

            <div className={`inputWrapper ${greenButtonStyle} text-center`}>
              Browse Photos
              <input
                label="Browse"
                className="fileInput left-0 top-0"
                name="image"
                multiple
                type="file"
                accept="/image/*"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex-auto  text-right  ">
            <button
              className={secondaryButtonStyle}
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
            <button
              className={primaryButtonStyle}
              onClick={(e) => uploadPhotoOnNode(e)}
            >
              Submit
            </button>
          </div>
        </div>

        <span>
          {Object.entries(fileName).map(([key, value]) => {
            return (
              <>
                <div className="md:flex border  rounded-lg bg-white  border border-gray-300 p-6 mt-6 ">
                  <div className=" ">
                    <div id="loader" className="bg-gray-500 w-0"></div>
                    <img
                      src={URL.createObjectURL(value)}
                      alt="Decription"
                      width="400"
                      className=" rounded-lg"
                    />
                  </div>
                  <div className="flex-auto  md:pl-8">
                    <TextInputField
                      label="Title"
                      kind="text"
                      // ref={userNameRef}
                      value=""
                      // isRequired={true}
                      validation={["required", "min"]}
                    />
                    <TextArea
                      label="Description"
                      kind="text"
                      value=""
                      validation={[""]}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </span>
      </div>
    </>
  );
};
