import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { connect } from 'react-redux'

class Photos extends Component {
  render() {
    return (
      <div>
        <Gallery photos={this.props.photos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.galleryReducer.photos
  }
}

export default connect(mapStateToProps)(Photos);
