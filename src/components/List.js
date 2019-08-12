import React from 'react';
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { articles: state.articles }
}

const ConnectedList = ({ articles }) => {
  return (
    <ul className="list-group list-group-flush">
        {articles.map(d => (
          <li className="list-group-item" key={d.id}>
            {d.title}
          </li>
        ))}
      </ul>
  );
};

const List = connect(mapStateToProps)(ConnectedList)

export default List