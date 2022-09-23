import gql from 'graphql-tag'

export default gql`
  query getPostulantState(
    $id: String!
    $token: String!
  ) {
    PostulantState: getPostulantState(
      id: $id,
      token: $token
    ) {
      state
    }
  }
`
