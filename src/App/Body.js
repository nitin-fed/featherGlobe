/** @format */

import React, { Component } from "react";

import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";

import Home from "./Home/home";
import { Profile } from "./Profile/profile";
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

import RegisterUser from "./Demo/Container/Register";
import Contact from "./Profile/Components/contact";
import Galaxy from "./Demo/Components/galaxy";
import Protected from "../Utils/Protected";
import PublicRoutes from "../Utils/PublicRoutes";

export const Body = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/photography' element={<Photos />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />

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
        <Route path='/signup' element={<RegisterUser />} />
      </Route>

      <Route path='/signup' element={<PublicRoutes />}>
        {/* <Route path='/signup' element={<RegisterUser />} /> */}
      </Route>
    </Routes>
  );
};
