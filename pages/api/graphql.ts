import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../lib/schema';
const cors = require('micro-cors')();

let handler: (req: any, res: any) => Promise<void>;

async function getHandler() {
  if (handler) return handler;

  const apolloServer = new ApolloServer({
    introspection: true,
    schema: schema,
    context: ({ req }) => {
      const jwt = req.cookies['X-FVG-TOKEN'] || req.cookies['X-FVG-TOKEN-CORS'];
      return { token: jwt };
    },
  });

  return cors(async (req: any, res: any) => {
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }

    await apolloServer.start();
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // res.setHeader(
  //   'Access-Control-Allow-Origin',
  //   'https://studio.apollographql.com',
  // );
  // res.setHeader('Access-Control-Allow-Credentials', 'true');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // res.setHeader('Access-Control-Allow-Methods', 'POST');

  return (await getHandler())(req, res);
}