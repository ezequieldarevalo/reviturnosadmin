import gql from 'graphql-tag'

export default gql`
  query getWhoAmI(
    $token: String!
    $plantId: String!
  ) {
    WhoAmI: getWhoAmI(
      token: $token,
      plantId: $plantId,
    ) {
      name
      backendUrl
    }
  }
`
