/** @format */

import React, { Component, useEffect, useReducer, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";

import { db } from "../../../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "user");
  const history = useNavigate();

  const getUser = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUser();
  }, []);

  const primaryButtonStyle =
    "disabled:opacity-50 rounded-lg py-2  px-5 bg-lime-500 text-black hover:bg-lime-800 hover:text-white";

  const warningButtonStyle =
    "rounded-lg py-2  ml-3  px-5 bg-red-500 text-black hover:bg-red-800 hover:text-white";

  const deleteButton =
    "rounded-lg py-0 px-3  ml-3 bg-gray-700 text-black hover:bg-red-800 hover:text-white";

  const rows = [];

  const changeHandler = (evt) => {
    if (evt.target.checked) {
      rows.push(evt.target);
    } else {
      rows.splice(evt.target.getAttribute("id"), 1);
    }
  };

  const deleteHandler = (id) => {
    const userDoc = doc(db, "user", id);
    deleteDoc(userDoc, id);
    getUser();
  };

  const update = (id, value) => {
    history("/signup", { state: { id, value } });
    // const userDoc = doc(db, "user", id);
    // updateDoc(userDoc, { phone: { value: "2323" } });
    // getUser();
  };

  return (
    <>
      <h1 className='text-2xl'>Users List</h1>
      <br />
      <ul className='striped'>
        {Object.entries(users).map(([key, value]) => {
          return (
            <li className='leading-8 py-1' key={value.id}>
              <div className='flex flex-row w-full'>
                <div className='mr-4'>
                  <input
                    id={value.id}
                    type='checkbox'
                    className='h-4  w-4 mr-2'
                    onChange={(e) => changeHandler(e, value.id)}
                  />
                </div>
                <div className='w-48 grow-0'>
                  {value["firstName"] && value["firstName"].value}
                </div>
                <div className='w-36 grow-0'>
                  {value["lastName"] && value["lastName"].value}
                </div>
                <div className='w-48 grow-0'>
                  {value["phone"] && value["phone"].value}
                </div>
                <div className='grow'>
                  {value["email"] && value["email"].value}
                </div>

                <button
                  onClick={() => deleteHandler(value.id)}
                  className={deleteButton}>
                  X
                </button>
                <button
                  className={deleteButton}
                  onClick={() => update(value.id, value)}>
                  E
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <br />
      <div className='float-right'>
        <button className={primaryButtonStyle}>Edit</button>
        <button className={warningButtonStyle}>Delete</button>
      </div>
    </>
  );
};

export default Users;
