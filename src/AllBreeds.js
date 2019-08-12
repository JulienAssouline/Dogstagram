import React from 'react';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import capitalizeFirstLetter from "./capitalizeFirstLetter"

import store from "./Redux/store/index";
import { addArticle } from "./Redux/actions/index"

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

const AllBreeds = (props) => {
  const { data, error, loading } = useQuery(GET_DOGS);

  console.log(store.getState())

  store.subscribe(() => console.log("look ma, redux!"))

  store.dispatch( addArticle({ title: "React Redux Tutorial for Beginners", id: 1}))

  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <div>
    <h1 className = "title"> Puppies </h1>
    <ul className = "image-grid">
    {
      data.dogs.map((d,i) =>
        <div className = "dog-divs" key = {i}>
        <h1> {capitalizeFirstLetter(d.breed)} </h1>
        <img src = {d.displayImage}
             alt="Italian Trulli"
             className = "dog-image"
             onClick = {(response) => {
              props.history.push("/feed"+d.breed)
            }}
        />
        </div>
        )
    }
  </ul>
  </div>
  );
};

export default AllBreeds