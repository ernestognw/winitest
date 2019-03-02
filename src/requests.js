import gql from 'graphql-tag'

const GET_IDEA_DATA = gql`
  query getIdeaData {
    profileRandom{
      content
    }
    industryRandom{
      content
    }
    problemRandom{
      content
      complement
    }
    categoryRandom{
      content
    }
    technologiesRandom{
      content
    }
    advantageRandom{
      content
    }
  }
`;

export { GET_IDEA_DATA };