import * as admin from "firebase-admin";

const serviceAccount = require("/Users/bs/Documents/GitHub/us-gentrification-statistics/graphQL/genetrificationmapping-99fd365725dd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import { ApolloServer, ApolloError, ValidationError, gql } from "apollo-server";

interface User {
  id: string;
  name: string;
  screenName: string;
  statusesCount: number;
}

interface Tweet {
  id: string;
  likes: number;
  text: string;
  userId: string;
}

const typeDefs = gql`
  # A Twitter User
  type User {
    id: ID!
    name: String!
    screenName: String!
    statusesCount: Int!
    tweets: [Tweets]!
  }
  # A Tweet Object
  type Tweets {
    id: ID!
    text: String!
    userId: String!
    user: User!
    likes: Int!
  }
  type Query {
    tweets: [Tweets]
    user(id: String!): User
  }
`;

const resolvers = {
  Query: {
    async tweets() {
      const tweets = await admin
        .firestore()
        .collection("tweets")
        .get();
      return tweets.docs.map(tweet => tweet.data()) as Tweet[];
    },
    async user(_: null, args: { id: string }) {
      try {
        const userDoc = await admin
          .firestore()
          .doc(`users/${args.id}`)
          .get();
        const user = userDoc.data() as User | undefined;
        return user || new ValidationError("User ID not found");
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  },
  User: {
    async tweets(user) {
      try {
        const userTweets = await admin
          .firestore()
          .collection("tweets")
          .where("userId", "==", user.id)
          .get();
        return userTweets.docs.map(tweet => tweet.data()) as Tweet[];
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  },
  Tweets: {
    async user(tweet) {
      try {
        const tweetAuthor = await admin
          .firestore()
          .doc(`users/${tweet.userId}`)
          .get();
        return tweetAuthor.data() as User;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: "user:gh.theswerd:UTYqGAmkhiO5K9aZc93dtg"
  },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// import { ApolloServer, ApolloError, ValidationError, gql } from "apollo-server";

// interface County {
//   id: string;

//   Metro: string;
//   MunicipalCodeFIPS: string;
//   RegionID: string;
//   RegionName: string;
//   SizeRank: string;
//   State: string;
//   StateCodeFIPS: string;
//   _2019_01: string;
//   _2019_02: string;
//   _2019_03: string;
//   _2019_04: string;
//   _2019_05: string;
//   _2019_06: string;
//   _2019_07: string;
//   _2019_08: string;
//   _2019_09: string;
//   _2019_10: string;
//   _2019_11: string;
//   _2019_12: string;
//   _2020_01: string;
//   _2020_02: string;
// }

// interface Tweet {
//   id: string;
//   likes: number;
//   text: string;
//   userId: string;
// }

// const typeDefs = gql`

//   type County {
//     id: string!

//     Metro: string!
//     MunicipalCodeFIPS: string!
//     RegionID: string!
//     RegionName: string;
//     SizeRank: string!
//     State: string!
//     StateCodeFIPS: string!

//     _2019_01: string!
//     _2019_02: string!
//     _2019_03: string!
//     _2019_04: string!
//     _2019_05: string!
//     _2019_06: string!
//     _2019_07: string!
//     _2019_08: string!
//     _2019_09: string!
//     _2019_10: string!
//     _2019_11: string!
//     _2019_12: string!
//     _2020_01: string!
//     _2020_02: string!
//   }

//   type Query {
//     County: (id String!)
//   }
// `;

// const resolvers = {
//   Query: {
//     async counties() {
//       const counties = await admin
//         .firestore()
//         .collection("housingCostsCountyWide")
//         .get();
//       return counties.docs.map(county => county.data()) as County[];
//     }
//   },
//   County: {
//     async getCounty(countyID: string) {
//       try {
//         const countyDoc = await admin
//           .firestore()
//           .collection("housingCostsCountyWide")
//           .doc(countyID)
//           .get();
//         return countyDoc.data() as County[];
//       } catch (error) {
//         throw new ApolloError(error);
//       }
//     }
//   }
//   // Counties: {
//   //   async county(county: string) {
//   //     try {
//   //       const countyDoc = await admin
//   //         .firestore()
//   //         .doc(`housingCostsCountyWide/${county}`)
//   //         .get();
//   //       return countyDoc.data() as County;
//   //     } catch (error) {
//   //       throw new ApolloError(error);
//   //     }
//   //   }
//   //}
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   engine: {
//     apiKey: "user:gh.theswerd:UTYqGAmkhiO5K9aZc93dtg"
//   },
//   introspection: true
// });

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
