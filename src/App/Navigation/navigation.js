import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Home from '../Home/home';
import Profile from '../Profile/profile';
import Photography from '../Photography/photography';
import Demo from '../Demo/demoApp';
import './navbar.css';
import Backdrop from '../Components/Backdrop';
import GuessedWordWrapper from '../Demo/Container/GuessedWordWrapper';


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isModelOpen: false,
      linkArr: ['profile', 'photography', 'demo', 'guessWord'],
      pageToLoad: '/'
    };
 
    const test = () => {
      this.setState({ ...this.state, pageToLoad: 'Nitin' });
      console.log(this.state.linkArr[Math.floor(Math.random() * 5)], 'Nitin')
    }
    test();
    console.log(this.state)

  }


  getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentShouldMount() {
    console.log('componentShouldMount')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount');
    //this.setState({ ...this.state, pageToLoad: 'Nitin' });
    console.log(this.state)
    //this.props.history.push('/dashboard')
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount  --unsafe ')
    if (window.innerWidth > 768) {
      this.setState({ ...this.state, isMenuOpen: true });
    }
  }

  hamburgerHandler = () => {
    this.setState({ ...this.state, isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    let attachedCSS = 'appNav';
    if (this.state.isMenuOpen) {
      attachedCSS = 'appNav show';
    } else {
      attachedCSS = 'appNav hide';
    }

    return (
      <div>
        <ul className={attachedCSS}>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/photography">
              Photography
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/demo">
              Demo
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/guessWord">
              Guess Word
            </NavLink>
          </li>
        </ul>
        <hr />

        <div className="hamburger" onClick={this.hamburgerHandler}>
          <button>X</button>
        </div>
        <Backdrop
          show={this.state.isModelOpen}
          clicked={this.hamburgerHandler}
        />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/photography" component={Photography} />
            <Route path="/demo" component={Demo} />
            <Route path="/guessWord" component={GuessedWordWrapper} />
          </Switch>
        </div>

        <Redirect to={this.state.pageToLoad} />
      </div>


    );
  }
}

export default Navigation;
