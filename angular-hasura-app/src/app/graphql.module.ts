import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, GraphQLRequest, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/link-context';

const authCtx = () => setContext((operation: GraphQLRequest) => {
  if (!['signin', 'signup'].includes(operation.operationName.toLowerCase())) {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`
      }
    }
  }
});

const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([authCtx(), httpLink.create({uri})]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
