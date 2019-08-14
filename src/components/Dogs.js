import React from 'react';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';
import capitalizeFirstLetter from "../capitalizeFirstLetter"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Likes from "./Likes"

import { connect } from "react-redux"
import uuidv1 from "uuid"
import { ADD_LIKE, REMOVE_LIKE} from "../Redux/constants/action-types"


// import { addLike } from "../Redux/actions/index"

// function mapDispatchToProps(dispatch) {
//   return {
//     addLike: like => dispatch(addLike(like))
//   }
// }

const mapStateToProps = state => {
  return { likes: state.likes }
}

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



const ConnectDogs = (props) => {

  function handleClick(e) {

    if (e.currentTarget.classList.length === 4) {
      e.currentTarget.classList.add('clicked')

      const id = uuidv1();
      props.dispatch({type: ADD_LIKE, id})

    } else {
      e.currentTarget.classList.remove('clicked')

      const id = uuidv1();
      props.dispatch({type: REMOVE_LIKE, id})

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
    <Likes />
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

const Dogs = connect(mapStateToProps)(ConnectDogs)

export default Dogs