import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink, 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Inbox from './pages/Inbox';
import MyAccount from './pages/MyAccount';
import OtherProfile from './pages/OtherProfile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
            <div className="container">
              <Routes>
                    <Route
                      path='/'
                      element={<Home />}
                    />
                    <Route
                      path='/profile'
                      element={<Profile />}
                    />
                    <Route
                      path='/profile/:username'
                      element={<OtherProfile />}
                    />
                    <Route
                      path='/login'
                      element={<Login />}
                    />
                    <Route
                      path='/signup'
                      element={<Signup />}
                    />
                    <Route
                      path='/inbox'
                      element={<Inbox />}
                    />
                    <Route 
                      path='/myaccount'
                      element={<MyAccount />}
                    />
              </Routes>    
            </div>   
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
