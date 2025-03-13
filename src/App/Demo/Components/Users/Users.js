/** @format */

import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  primaryButtonStyle,
  warningButtonStyle,
  deleteButton,
} from "../../../Utils/constants";

import { db } from "../../../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { MessageBox } from "../../../Components/MessageBox";

const Users = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "user");
  const messageBoxRef = useRef(null);
  const history = useNavigate();

  const getUser = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUser();
  }, []);

  const rows = [];

  const changeHandler = (evt) => {
    if (evt.target.checked) {
      rows.push(evt.target);
    } else {
      rows.splice(evt.target.getAttribute("id"), 1);
    }
  };

  const deleteHandler = (id) => {
    // messageBoxRef.current.showMessageBox();
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

  const messageBoxOkHandler = () => {
    console.log("Ok Hadler");
  };
  const messageBoxCancelHandler = () => {
    console.log("Cancel Handler");
  };

  return (
    <>
      <MessageBox
        ref={messageBoxRef}
        title='Edit User Info'
        message='Are you sure, you want to edit user info?'
        okHandler={messageBoxOkHandler}
        cancelHandler={messageBoxCancelHandler}
      />
      <h1 className='text-2xl'>Users List</h1>
      <br />
      <ul className='striped'>
        {Object.entries(users).map(([key, value]) => {
          console.log(value);
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
                  {value["firstName"] && value["firstName"]}
                </div>
                <div className='w-36 grow-0'>
                  {value["lastName"] && value["lastName"]}
                </div>
                <div className='w-48 grow-0'>
                  {value["phone"] && value["phone"]}
                </div>
                <div className='grow'>{value["email"] && value["email"]}</div>

                <button
                  onClick={() =>
                    messageBoxRef.current.showMessageBox(
                      deleteHandler,
                      value.id
                    )
                  }
                  className={deleteButton}
                >
                  X
                </button>
                <button
                  className={deleteButton}
                  onClick={() => update(value.id, value)}
                >
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
