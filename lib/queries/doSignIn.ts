import gql from 'graphql-tag'

export default gql`
  mutation doSignIn(
    $email: String!,
    $password: String!,
    $plant: String!
  ) {
    SignIn: doSignIn(
      email: $email,
      password: $password,
      plant: $plant
    ) {
      name
      access_token
    }
  }
`
