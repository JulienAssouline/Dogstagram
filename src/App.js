import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo-hooks";
import client from "./apolloclient"
import Dogs from "./components/Dogs"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllBreeds from "./components/AllBreeds"
import { Provider } from "react-redux";
import store from "./Redux/store/index"
import ListApp from "./components/ListApp"
import Posts from "./components/Posts"


function App() {
  return (
    <ApolloProvider client = {client}>
      <Provider store = {store}>
        <Router>
          <Route path='/' exact component={AllBreeds} />
          <Route path='/feed:dog' exact component={Dogs} />
          <Route path= '/listapp' exact component = {ListApp} />
          <Route path = '/posts' exact component = {Posts} />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
