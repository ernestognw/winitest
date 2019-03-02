import { HttpLink } from 'apollo-link-http';
import { apiUrl } from '../../config/environment'

const httpLink = new HttpLink({
  uri: apiUrl,
  credentials: 'same-origin'
})

export default httpLink;