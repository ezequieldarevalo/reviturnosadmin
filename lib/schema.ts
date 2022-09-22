import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'
import gql from 'graphql-tag'

const typeDefs = gql`
  type SignInResponse {
    username: String!
    role: String!
    token: String!
    postulantId: String
  }
  type WhoAmIResponse {
    username: String!
    role: String!
    postulantId: String
  }
  type Query {
    getWhoAmI(token: String!): WhoAmIResponse
  }

  type Mutation {
    doSignIn(username: String!, password: String!): SignInResponse
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
