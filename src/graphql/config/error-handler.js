import { onError } from "apollo-link-error";

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map((e) =>
      console.error(e.message, e)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorHandler