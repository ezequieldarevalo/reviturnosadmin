import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'
import gql from 'graphql-tag'

const typeDefs = gql`
  type SignInResponse {
    name: String!
    access_token: String!
  }
  type WhoAmIResponse {
    name: String!
  }
  type PostulantStateResponse {
    state: String!
  }
  type Query {
    getWhoAmI(token: String!): WhoAmIResponse
    getPostulantState(id: String!, token: String!): PostulantStateResponse
  }

  type Mutation {
    doSignIn(email: String!, password: String!, plant: String!): SignInResponse
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
