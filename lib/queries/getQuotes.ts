import gql from 'graphql-tag'

export default gql`
  query getQuotes($plantId: String!, $token: String!, $inputText: String!) {
    Quotes: getQuotes(
      plantId: $plantId
      token: $token
      inputText: $inputText
    )
      {
      quotes{
        id
      }
    }
  }
`
