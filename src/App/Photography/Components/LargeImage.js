import React from 'react';
import { connect } from 'react-redux';
import Backdrop from '../../Components/Backdrop';
import * as actions from '../../Store/Actions/actions';

const LargeImage = props => {
  const handleClick = e => {
    var event = window.event ? window.event : e;
    if (event.keyCode === 37) {
      props.onPreviousClicked();
    } else if (event.keyCode === 39) {
      props.onNextClicked();
    }
  };

  if (props.loadLargeImage) {
    let icons = null;
    if (props.currentId === 1) {
      icons = (
        <>
          <i className="fa fa-angle-left arrow left disabled"></i>
          <i
            className="fa fa-angle-right arrow right"
            onClick={props.onNextClicked}
          ></i>
        </>
      );
    } else if (props.currentId === props.totalCount.length) {
      icons = (
        <>
          <i
            className="fa fa-angle-left arrow left"
            onClick={props.onPreviousClicked}
          ></i>
          <i className="fa fa-angle-right arrow right disabled"></i>
        </>
      );
    } else {
      icons = (
        <>
          <i
            className="fa fa-angle-left arrow left"
            onClick={props.onPreviousClicked}
          ></i>
          <i
            className="fa fa-angle-right arrow right"
            onClick={props.onNextClicked}
          ></i>
        </>
      );
    }

    return (
      <div
        className="largeImage"
        tabIndex="0"
        onKeyDown={event => handleClick(event)}
      >
        <div className="imgNavigator">{icons}</div>
        <img src={props.largeImageSrc} alt="Home page" />
        <Backdrop
          show={props.loadLargeImage}
          clicked={props.onBackdropClicked}
        />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    totalCount: state.galleryReducer.photos,
    currentId: state.galleryReducer.currentSelectedImageId,
    loadLargeImage: state.galleryReducer.loadLargeImage,
    largeImageSrc: state.galleryReducer.largeImageSrc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackdropClicked: () => dispatch(actions.backdropClicked()),
    onPreviousClicked: () => dispatch(actions.previousClicked()),
    onNextClicked: () => dispatch(actions.nextClicked())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LargeImage);
