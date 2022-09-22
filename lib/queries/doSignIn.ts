import gql from 'graphql-tag'

export default gql`
  mutation doSignIn(
    $username: String!,
    $password: String!
  ) {
    SignIn: doSignIn(
      username: $username,
      password: $password,
    ) {
      username
      role
      token
      postulantId
    }
  }
`
