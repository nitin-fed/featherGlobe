/** @format */

import React, { Component } from "react";

import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";

import Home from "./Home/home";
import Photography from "./Photography/photography";
// import Demo from "./Demo/demoApp";

// import Backdrop from "../Components/Backdrop";
import GuessedWordWrapper from "./Demo/Container/GuessedWordWrapper";
import { JottoApp } from "./Jotto/JottoApp";
import Article from "./Demo/Article/Article";
import Gallery from "./Demo/Container/Gallery";
import Users from "./Demo/Components/Users/Users";
import todos from "./Demo/Container/todos";
import Support from "./Demo/Support/Support";
import Photos from "./Photography/Components/Photos";
import Posts from "./Demo/Container/Posts";
import Counters from "./Demo/Container/counters";
import { About } from "../App/About/about";
import { Contact } from "../App/About/Components/contact";

// import RegisterUser from "./Demo/Container/Signup";
// import Contact from "./Profile/Components/contact";
import Galaxy from "./Demo/Components/galaxy";
import Protected from "../Utils/Protected";
import PublicRoutes from "../Utils/PublicRoutes";
import Login from "./Login";
import { Profile } from "./Demo/Container/Profile";

export const Body = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/photography' element={<Photos />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/registerUser' element={<Login />} />

      <Route path='/' element={<Protected />}>
        <Route path='/demo' element={<Posts />} />
        <Route path='/guessWord' element={<GuessedWordWrapper />} />
        <Route path='/jotto' element={<JottoApp />} />
        <Route path='/demo/posts' element={<Posts />} />
        <Route path='/demo/Counters' element={<Counters />} />
        <Route path='/demo/Gallery' element={<Gallery />} />
        <Route path='/demo/To rtretrtdos' element={<todos />} />
        <Route path='/demo/Article' element={<Article />} />
        <Route path='/demo/Support' element={<Support />} />
        <Route path='/demo/counter' element={<Counters />} />
        <Route path='/users' element={<Users />} />
        <Route path='/demo/galaxy' element={<Galaxy />} />
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route path='/signup' element={<PublicRoutes />}>
        {/* <Route path='/signup' element={<RegisterUser />} /> */}
      </Route>
    </Routes>
  );
};
