import React, { useState } from 'react';
import { connect } from "react-redux"
import uuidv1 from "uuid"
import { addArticle } from "../Redux/actions/index"

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

const ConnectedForm = (props) => {
 const [title, setTitle] = useState("")

 function handleChange(e) {
  setTitle(e.target.value)
 }

 function handleSubmit(e) {
  e.preventDefault()
  const id = uuidv1();
  props.addArticle({title, id})
  setTitle("")
 }

  return (
    <form onSubmit = {handleSubmit}>
      <div className = "form-group">
        <label> Title </label>
        <input
          type = "text"
          className = "form-control"
          id = "title"
          value = {title}
          onChange = {handleChange}
        />
      </div>
      <button type = "submit" className = "btn btn-success btn-lg">
        Save
      </button>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form