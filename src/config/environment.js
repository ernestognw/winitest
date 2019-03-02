import urljoin from 'url-join';

const apiUrl = urljoin(process.env.REACT_APP_URL, "graphql");

export { apiUrl };
