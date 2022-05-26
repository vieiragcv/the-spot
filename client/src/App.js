import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink, 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header'
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
