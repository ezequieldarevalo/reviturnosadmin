import gql from 'graphql-tag'

export default gql`
  mutation doSignIn(
    $email: String!,
    $password: String!,
    $plantId: String!
  ) {
    SignIn: doSignIn(
      email: $email,
      password: $password,
      plantId: $plantId
    ) {
      name
      access_token
      backendUrl
      plantId
    }
  }
`
