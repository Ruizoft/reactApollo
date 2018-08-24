import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { getUser } from './queries.gql';

export default class UsuarioContainer extends PureComponent {
  render() {
    return (
      <Query query={getUser}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error!`;
          return (
            <div>
              <h1>
                {data.usuario.nombre} {data.usuario.apellido}
              </h1>
            </div>
          );
        }}
      </Query>
    );
  }
}
