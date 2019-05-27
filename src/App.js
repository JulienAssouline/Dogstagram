import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo-hooks";
import client from "./apolloclient"
import Dogs from "./Dogs"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllBreeds from "./AllBreeds"


function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <Route path='/' exact component={AllBreeds} />
        <Route path='/feed:dog' exact component={Dogs} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
