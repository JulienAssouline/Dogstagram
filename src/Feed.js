import React from 'react';
import gql from "graphql-tag";
import { useQuery } from 'react-apollo-hooks';



const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

const Feed = () => {
  const { data, error, loading } = useQuery(GET_DOGS);
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <ul>
    {
      data.dogs.map((d,i) =>
        <div key = {i}>
        <img source = {d.displayImage} alt="Italian Trulli" />
        </div>
        )
    }
  </ul>
  );
};

export default Feed