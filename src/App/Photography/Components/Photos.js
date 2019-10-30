import React from 'react';

import './Photos.css'
import { connect } from 'react-redux'
import Photo from './Photo';
import LargeImage from './LargeImage';

import * as actions from '../../Store/Actions/actions'

const Photos = (props) => {

  return (
    <div>
      <LargeImage />
      <span className='gallery'>
        {props.photos.map((photo, index) => {
          return (
            <Photo clickHandler={(event) => props.onLoadLargeImage(event)} key={index} imgSrc={photo.src} id={photo.id} />
          )
        })}
      </span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.galleryReducer.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadLargeImage: (event) => dispatch(actions.loadLargeImage(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
