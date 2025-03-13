

import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextInputField } from "../../Components/TextInputField";
import { warningButtonStyle, primaryButtonStyle } from "../../Utils/constants";
import { db } from "../../../firebase-config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export const Profile = () => {
  /** Passing  state  (data)  with location object for Edit User */
  const { state } = useLocation();
  const [isFormEditing, setFormEditinng] = useState(false);
  const history = useNavigate();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const userNameRef = useRef(null);
  const userCollectionRef = collection(db, "user");

  const allRefs = [
    { firstName: firstNameRef },
    { lastName: lastNameRef },
    { phone: phoneRef },
    { email: emailRef },
    { password: passwordRef },
    { confirmPassword: confirmPasswordRef },
    { userName: userNameRef },
  ];

  useEffect(() => {
    if (state) {
      setFormEditinng(true);
    }
  }, [state]);

  const validateForm = (errors) => {
    let valid = true;
    errors &&
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
     

    handleReset(evt);
    if (isFormEditing) {
      updateUser(evt);
      history("/users");
    } else {
      createUser(evt);
    }
  };

  const updateUser = async (evt) => {
    const userDoc = doc(db, "user", state.id);
    await updateDoc(userDoc, { ...collectData(evt) });
    handleReset(evt);
    history("/users");
  };

  const createUser = async (evt) => {
     

    await addDoc(userCollectionRef, { ...collectData(evt) });
  };

  const collectData = (evt) => {
    let dataCollection = {};
    allRefs.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
         
        dataCollection = { ...dataCollection, [key]: value.current.getValue() };
      });
    });

    return dataCollection;
  };

  const handleCancel = (e) => {
    e.preventDefault();

    handleReset(e);
    history("/users");
  };

  const handleReset = (e) => {
    e && e.preventDefault();

    allRefs.forEach((item) => {
      Object.values(item).forEach((value) => {
        value.current && value.current.resetField();
      });
    });
  };

  return (
    <div className='p-10 sm:w-full lg:w-3/4 m-auto '>
      <h1 className='text-3xl'>
        {isFormEditing ? "Update user details" : "Sign  Up"}
      </h1>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <TextInputField
          label='User Name'
          validation={["min", "max", "username"]}
          kind='text'
          ref={userNameRef}
          value={(state && state.value["userName"]) || ""}
          isRequired={true}
        />
        <TextInputField
          label='First Name'
          validation={["required", "min"]}
          kind='text'
          value={(state && state.value["firstName"]) || ""}
          ref={firstNameRef}
          isRequired={true}
        />
        <TextInputField
          label='Last Name'
          validation={["required", "min", "max"]}
          kind='text'
          ref={lastNameRef}
          isRequired={true}
          value={(state && state.value["lastName"]) || ""}
        />
        <TextInputField
          label='Phone'
          validation={["min", "max"]}
          kind='number'
          ref={phoneRef}
          value={(state && state.value["phone"]) || ""}
        />
        <TextInputField
          label='Email'
          novalidate
          validation={["email"]}
          ref={emailRef}
          // kind='email'
          isRequired={true}
          value={(state && state.value["email"]) || ""}
        />
        <TextInputField
          label='Password'
          validation={["min", "max"]}
          kind='password'
          ref={passwordRef}
          isRequired={true}
          value={(state && state.value["password"].value) || ""}
        />
        <TextInputField
          label='Confirm Password'
          validation={["min", "max"]}
          kind='password'
          ref={confirmPasswordRef}
          isRequired={true}
          value={(state && state.value["confirmPassword"].value) || ""}
        />
        <br />
        <div className='float-right'>
          <button
            onClick={(e) => handleCancel(e)}
            className={warningButtonStyle}>
            Cancel
          </button>
          <button
            onClick={(e) => handleReset(e)}
            className={primaryButtonStyle}>
            Reset
          </button>
          <button type={"submit"} className={primaryButtonStyle}>
            {isFormEditing ? "Update" : "Sign  Up"}
          </button>
        </div>
      </form>
    </div>
  );
};
