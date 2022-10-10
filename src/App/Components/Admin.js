/** @format */

import React, { useEffect, useState } from "react";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import hljs from "highlight.js";

import { useSelector } from "react-redux";
import { primaryButtonStyle, warningButtonStyle } from "../Utils/constants";
import { db } from "../../firebase-config";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import ToggleButton from "./ToggleButton";

export const Admin = () => {
  const { profile } = useSelector((state) => state.profileReducer);
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const languages = ["HTML", "CSS", "JavaScript", "React", "Redux"];

  const userCollectionRef = collection(db, "Posts");

  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // const fetchBlogs = async () => {
  //   //  const userCollectionRef = collection(db, "Posts");

  //   const data = await getDocs(userCollectionRef);
  //   // console.log(data.docs.map( (i) => console.log(i.data()['title'])));
  //   console.log(editorData);
  // };

  const addPost = async () => {
    console.log("dropdown");
    const data = {
      title,
      description: editorData,
      tags: ["javascript"],
      date: Date.now(),
    };
    const res = await addDoc(userCollectionRef, data);
    console.log(res.id);
    setEditorData("");
    setTitle("");
    //TODO: clear ck editor data after successful post
  };
  return (
    <>
      <h1 className='text-3xl'>Create Post</h1>
      <br />
      <div className='ckeditor'>
        <label htmlFor='title' className='text-sm'>
          Title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name='title'
          className='text-3x1 w-full rounded-lg bg-transparent border border-lime-700 p-3'
          placeholder='Enter title'></input>
        <br />
        <br />
        <label htmlFor='desc' className='text-sm'>
          Description
        </label>

        <CKEditor
          id='dddd'
          config={{
            codeBlock: {
              plugins: [],
              toolbar: ["codeBlock"],
              languages: [
                {
                  language: "javascript",
                  label: "JavaScript",
                  class: "js javascript js-code",
                },
                {
                  language: "html",
                  label: "HTML",
                },
              ],
            },
          }}
          name='desc'
          placeholder='Type the content here!'
          editor={Editor}
          data={editorData}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            // const data = editor.getData();
            // console.log({ event, editor, data });
            setEditorData(editor.getData());
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", editor);
            //setEditorData(editor.getData());
            // editor.setData("");
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <br />

        <fieldset>
          <legend>Tags</legend>
          {languages.map((language) => {
            return (
              <>
                <ToggleButton label={language} checked={true} />
                <br />
              </>
            );
          })}
        </fieldset>

        <br />
        <br />

        <div className='float-right'>
          <button className={warningButtonStyle}>Clear</button>
          <button onClick={() => addPost()} className={primaryButtonStyle}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};
