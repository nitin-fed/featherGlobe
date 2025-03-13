

import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

// import Backdrop from "../Components/Backdrop";
import GuessedWordWrapper from "./Demo/Container/GuessedWordWrapper";
import { JottoApp } from "./Jotto/JottoApp";
import Article from "./Demo/Article/Article";
import Gallery from "./Demo/Container/Gallery";
import Users from "./Demo/Components/Users/Users";
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
import { UnAuthUser } from "./Components/UnAuthUser";

import { useDispatch } from "react-redux";
import { updateCurrentUser } from "./Store/Reducers/appSlice";
import { auth } from "../firebase-config";
import { Post } from "./Demo/Components/Post";
import { Admin } from "./Components/Admin";

import SecHome from "../sec";
import { UploadPhotos } from "./About/Components/uploadPhotos";
import StockPhotos from "./StockPhotos/StockPhotos";
import EATransfers from "./EATransfers/EATransfers";

export const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(updateCurrentUser(user?.email));
    });
  }, []);

  return (
    <>
      <div
        class='fb-like'
        data-href='https://www.featherglobe.com/photography'
        data-width='40px'
        data-layout=''
        data-action=''
        data-size=''
        data-share='true'
      ></div>

      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/stockPhotos' element={<StockPhotos />} />
        <Route path='/eat' element={<EATransfers />} />
        <Route path='/photography' element={<Photos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/registerUser' element={<Login />} />
        <Route path='/post' element={<Post />} />
        <Route path='/uploadPhotos' element={<UploadPhotos />} />
        <Route path='/secHome' element={<SecHome />} />

        <Route path='/' element={<Protected />}>
          <Route path='/createPost' element={<Admin />} />
          <Route path='/demo' element={<Counters />} />
          <Route path='/guessWord' element={<GuessedWordWrapper />} />
          <Route path='/jotto' element={<JottoApp />} />
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

        <Route path='/signup' element={<PublicRoutes />}></Route>
        <Route path='/unAuthUser' element={<UnAuthUser />}></Route>
      </Routes>
    </>
  );
};
