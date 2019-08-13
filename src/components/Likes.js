import React from 'react';
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { likes: state.likes }
}


const ConnectedLikes = ({ likes }) => {
  return (
    <div>
      <h2> Likes: {likes} </h2>
    </div>
  );
};

const Likes = connect(mapStateToProps)(ConnectedLikes)

export default Likes