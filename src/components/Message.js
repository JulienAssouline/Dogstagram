import React from 'react';
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { badWords: state.badWords }
}

const ConnectedMessage = ({ badWords }) => {
  const message = badWords.length > 0 ? "Bad word try another" : ""
  return (
    <div>
      <h1> {message} </h1>
    </div>
  );
};

const Message = connect(mapStateToProps)(ConnectedMessage)

export default Message