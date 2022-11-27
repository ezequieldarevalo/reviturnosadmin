import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'
import gql from 'graphql-tag'

const typeDefs = gql`
  type SignInResponse {
    name: String!
    access_token: String!
    backendUrl: String!
    plantId: String!
  }
  type WhoAmIResponse {
    name: String!
    backendUrl: String!
  }
  type tQuote {
    id: String
  }
  type GetQuotesResponse {
    quotes: [tQuote]
  }
  type PostulantStateResponse {
    state: String!
  }
  type Query {
    getWhoAmI(token: String!, plantId: String!): WhoAmIResponse
    getPostulantState(id: String!, token: String!): PostulantStateResponse
    getQuotes(plantId: String!, token: String!, inputText: String!): GetQuotesResponse
  }

  type Mutation {
    doSignIn(email: String!, password: String!, plantId: String!): SignInResponse
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
