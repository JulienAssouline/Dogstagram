import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { getData } from "../Redux/actions/index";


function ConnectedPosts(props) {

  useEffect(() => {
    props.getData()
  }, [])

  return (
    <ul className="posts-container">
      {
        props.articles.map((el, i) => (
          <li className = "list-group-item" key = {i}>
            {el.title}
          </li>
          ))
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0,10)
  }
}


let Posts = ConnectedPosts

export default connect(mapStateToProps,{ getData })(Posts);

