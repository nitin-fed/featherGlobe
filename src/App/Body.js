/** @format */

import React, { Component } from "react";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

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
import About from "./Profile/Components/about";
import Skills from "./Profile/Components/skills";
import Experience from "./Profile/Components/experience";
import uiDesigning from "./Profile/Components/uiDesigning";
import App from "./Demo/demoApp";
import RegisterUser from "./Demo/Container/Register";
import Contact from "./Profile/Components/contact";

export const Body = () => {
  return (
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Home} />

        <Route path='/photography' component={Photos} />

        <Route path='/guessWord' component={GuessedWordWrapper} />
        <Route path='/jotto' component={JottoApp} />
        <Route path='/demo' component={App} />
        <Route path='/demo/posts' component={Posts} />
        <Route path='/demo/Counters' component={Counters} />
        <Route path='/demo/Gallery' component={Gallery} />
        <Route path='/users' component={Users} />
        <Route path='/signup' component={RegisterUser} />
        <Route path='/demo/Todos' component={todos} />
        <Route path='/demo/Article' component={Article} />
        <Route path='/demo/Support' component={Support} />
        <Route path='/contact' component={Contact} />
        <Route path='/profile' component={Profile} />
      </React.Suspense>
    </Switch>
  );
};

// class Navigation extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isMenuOpen: false,
//       isModelOpen: false,
//       linkArr: ["profile", "photography", "demo", "guessWord"],
//       pageToLoad: "/",
//     };

//     const test = () => {
//       //this.setState({ ...this.state, pageToLoad: "Nitin" });
//       console.log(this.state.linkArr[Math.floor(Math.random() * 5)], "Nitin");
//     };
//     test();
//     console.log(this.state);
//   }

//   hamburgerHandler = () => {
//     this.setState({ ...this.state, isMenuOpen: !this.state.isMenuOpen });
//   };

//   // getDerivedStateFromProps() {
//   //   console.log('getDerivedStateFromProps')
//   // }
//   componentWillReceiveProps() {
//     console.log("componentWillReceiveProps");
//   }
//   componentShouldMount() {
//     console.log("componentShouldMount");
//   }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     //this.setState({ ...this.state, pageToLoad: 'Nitin' });
//     console.log(this.state);
//     //this.props.history.push('/dashboard')

//     // if (screen.width <= 640) {
//     //   document.querySelector("#navbar").addEventListener("click", myFunction(event));

//     //   function myFunction() {
//     //     const isButton = event.target.className === "subnavbtn";
//     //     const subMenuItems = event.target.nextElementSibling;
//     //     isButton && subMenuItems.style["display"] === "none"
//     //       ? (subMenuItems.style["display"] = "block")
//     //       : (subMenuItems.style["display"] = "none");
//     //   }
//     // }
//   }

//   UNSAFE_componentWillMount() {
//     console.log("componentWillMount  --unsafe");
//     if (window.innerWidth > 768) {
//       this.setState({ ...this.state, isMenuOpen: true });
//     }
//   }

//   render() {
//     let attachedCSS = "appNav";
//     if (this.state.isMenuOpen) {
//       attachedCSS = "appNav show";
//     } else {
//       attachedCSS = "appNav hide";
//     }

//     return (
//       <div>
//         <div>
//           <div className='fg-navbar'>
//             <NavLink activeClassName='active' exact to='/'>
//               Home
//             </NavLink>

//             <div className='subnav'>
//               <button className='subnavbtn'>
//                 <NavLink activeClassName='active' to='/profile'>
//                   Profile <i className='fa fa-caret-down' />
//                 </NavLink>
//               </button>
//               <div className='subnav-content'>
//                 <NavLink activeClassName='active' to='/profile/about'>
//                   About
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/profile/skills'>
//                   Skills
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/profile/experience'>
//                   Experience
//                 </NavLink>

//                 <NavLink activeClassName='active' to='profile/uiDesigning'>
//                   UI Desigining
//                 </NavLink>
//               </div>
//             </div>
//             <NavLink activeClassName='active' to='/photography'>
//               Photography
//             </NavLink>

//             <div className='subnav'>
//               <button className='subnavbtn'>
//                 <NavLink activeClassName='active' to='/demo'>
//                   Demo <i className='fa fa-caret-down'></i>
//                 </NavLink>
//               </button>
//               <div className='subnav-content' id='list'>
//                 <NavLink activeClassName='active' to='/demo/Posts'>
//                   Posts
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/demo/Counters'>
//                   Counters/Calc
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/demo/Gallery'>
//                   Gallery
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/demo/RegisgerUser'>
//                   Register User
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/demo/Article'>
//                   Article
//                 </NavLink>

//                 <NavLink activeClassName='active' to='/demo/Support'>
//                   Support
//                 </NavLink>
//               </div>
//             </div>
//             <NavLink activeClassName='active' to='/guessWord'>
//               Guess Word
//             </NavLink>
//             <NavLink activeClassName='active' to='/jotto'>
//               Jotto
//             </NavLink>

//             <NavLink activeClassName='active' to='/contact'>
//               Contact
//             </NavLink>
//           </div>
//         </div>

//         {/* <ul className={attachedCSS}>
//           <li>
//             <NavLink activeClassName="active" exact to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeClassName="active" to="/profile">
//               Profile
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeClassName="active" to="/photography">
//               Photography
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeClassName="active" to="/demo">
//               Demo
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeClassName="active" to="/guessWord">
//               Guess Word
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeClassName="active" to="/jotto">
//               Jotto
//             </NavLink>
//           </li>
//           <li className="userInfo">Welcome: Nitin</li>
//         </ul> */}

//         {/* <div className="hamburger" onClick={this.hamburgerHandler}>
//           <button>X</button>
//         </div>
//         <Backdrop
//           show={this.state.isModelOpen}
//           clicked={this.hamburgerHandler}
//         /> */}
//         <div></div>

//         <Redirect to={this.state.pageToLoad} />
//       </div>
//     );
//   }
// }

// export default Navigation;
