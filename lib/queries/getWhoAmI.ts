import gql from 'graphql-tag';

export default gql`
  query getWhoAmI(
    $token: String!
  ) {
    WhoAmI: getWhoAmI(
      token: $token,
    ) {
      username
      role
    }
  }
`;