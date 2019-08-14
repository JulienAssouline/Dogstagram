import React from "react";
import List from "./List";
import Form from "./Form";
import Message from "./Message"

const ListApp = () => {
  return (
    <div className = "page-container">
      <div className="list-app-container">
        <div className="articles-container">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="form-container">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
      <Message />
    </div>
    )
};
export default ListApp;