import React from "react";
import List from "./List";
import Form from "./Form";

const ListApp = () => {
  return (
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
    )
};
export default ListApp;