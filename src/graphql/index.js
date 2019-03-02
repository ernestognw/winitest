// Apollo settings
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from 'apollo-cache-inmemory';

// Config
import httpLink from './config/http-link';
import errorHandler from './config/error-handler';

const link = ApolloLink.from([
  errorHandler,
  httpLink,
]);


const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all"
    },
    mutate: {
      errorPolicy: "all"
    }
  }
});

export default client;
