

import React, { Component } from "react";
import "./Photos.css";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      span: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setImageHeight);
  }

  setImageHeight = () => {
    const spanHeight = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({
      ...this.state,
      span: spanHeight
    });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          id={this.props.id}
          alt={this.props.imgSrc}
          ref={this.imageRef}
          src={this.props.imgSrc}
          onClick={this.props.clickHandler}
        />
      </div>
    );
  }
}

export default Photo;
