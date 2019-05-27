import React from 'react';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import capitalizeFirstLetter from "./capitalizeFirstLetter"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const GET_DOGS = gql`
  query getDogByBreed($breed: String!){
    dog(breed: $breed) {
      images {
        url
        id
      }
    }
  }
`



const Dogs = (props) => {

  function handleClick(e, id) {

    if (e.currentTarget.classList.length === 4) {
      e.currentTarget.classList.add('clicked')
    } else {
      e.currentTarget.classList.remove('clicked')
    }


  }

  let breed = props.match.params.dog

  const { data, error, loading } = useQuery(GET_DOGS, {variables: {breed} });
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <div>
    <h1 className = "breed-title"> {capitalizeFirstLetter(props.match.params.dog)} </h1>
    <ul className = "image-grid">
      {data.dog.images.map((dog, i) => (
        <div  className = "dog-breed-divs" key = {i}>
        <img className = "dog-breed-image" src = {dog.url} alt="Italian Trulli"/>
        <FontAwesomeIcon
          onClick = {e => handleClick(e)}
          icon={faHeart}
          className = {"heart-icon"}
          />

        </div>
      ))}
    </ul>
    </div>
  );
};

export default Dogs