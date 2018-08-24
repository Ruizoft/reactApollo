import React, { Component } from 'react';
import ApolloBoost from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '@fortawesome/fontawesome-free/js/all';

import './App.scss';

import AppComp from './AppComp';
import UsuarioComp from './Usuario';

const client = new ApolloBoost({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppComp>
          <UsuarioComp />
        </AppComp>
      </ApolloProvider>
    );
  }
}

export default App;
