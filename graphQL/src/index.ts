import * as admin from 'firebase-admin';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';

interface County {
  id: string;
  
Metro: string;
MunicipalCodeFIPS: string;
RegionID: string;
RegionName: string;
SizeRank: string;
State: string;
StateCodeFIPS: string;
_1996_04: string;
_1996_05: string;
_1996_06: string;
_1996_07: string;
_1996_08: string;
_1996_09: string;
_1996_10: string;
_1996_11: string;
_1996_12: string;
_1997_01: string;
_1997_02: string;
_1997_03: string;
_1997_04: string;
_1997_05: string;
_1997_06: string;
_1997_07: string;
_1997_08: string;
_1997_09: string;
_1997_10: string;
_1997_11: string;
_1997_12: string;
_1998_01: string;
_1998_02: string;
_1998_03: string;
_1998_04: string;
_1998_05: string;
_1998_06: string;
_1998_07: string;
_1998_08: string;
_1998_09: string;
_1998_10: string;
_1998_11: string;
_1998_12: string;
_1999_01: string;
_1999_02: string;
_1999_03: string;
_1999_04: string;
_1999_05: string;
_1999_06: string;
_1999_07: string;
_1999_08: string;
_1999_09: string;
_1999_10: string;
_1999_11: string;
_1999_12: string;
_2000_01: string;
_2000_02: string;
_2000_03: string;
_2000_04: string;
_2000_05: string;
_2000_06: string;
_2000_07: string;
_2000_08: string;
_2000_09: string;
_2000_10: string;
_2000_11: string;
_2000_12: string;
_2001_01: string;
_2001_02: string;
_2001_03: string;
_2001_04: string;
_2001_05: string;
_2001_06: string;
_2001_07: string;
_2001_08: string;
_2001_09: string;
_2001_10: string;
_2001_11: string;
_2001_12: string;
_2002_01: string;
_2002_02: string;
_2002_03: string;
_2002_04: string;
_2002_05: string;
_2002_06: string;
_2002_07: string;
_2002_08: string;
_2002_09: string;
_2002_10: string;
_2002_11: string;
_2002_12: string;
_2003_01: string;
_2003_02: string;
_2003_03: string;
_2003_04: string;
_2003_05: string;
_2003_06: string;
_2003_07: string;
_2003_08: string;
_2003_09: string;
_2003_10: string;
_2003_11: string;
_2003_12: string;
_2004_01: string;
_2004_02: string;
_2004_03: string;
_2004_04: string;
_2004_05: string;
_2004_06: string;
_2004_07: string;
_2004_08: string;
_2004_09: string;
_2004_10: string;
_2004_11: string;
_2004_12: string;
_2005_01: string;
_2005_02: string;
_2005_03: string;
_2005_04: string;
_2005_05: string;
_2005_06: string;
_2005_07: string;
_2005_08: string;
_2005_09: string;
_2005_10: string;
_2005_11: string;
_2005_12: string;
_2006_01: string;
_2006_02: string;
_2006_03: string;
_2006_04: string;
_2006_05: string;
_2006_06: string;
_2006_07: string;
_2006_08: string;
_2006_09: string;
_2006_10: string;
_2006_11: string;
_2006_12: string;
_2007_01: string;
_2007_02: string;
_2007_03: string;
_2007_04: string;
_2007_05: string;
_2007_06: string;
_2007_07: string;
_2007_08: string;
_2007_09: string;
_2007_10: string;
_2007_11: string;
_2007_12: string;
_2008_01: string;
_2008_02: string;
_2008_03: string;
_2008_04: string;
_2008_05: string;
_2008_06: string;
_2008_07: string;
_2008_08: string;
_2008_09: string;
_2008_10: string;
_2008_11: string;
_2008_12: string;
_2009_01: string;
_2009_02: string;
_2009_03: string;
_2009_04: string;
_2009_05: string;
_2009_06: string;
_2009_07: string;
_2009_08: string;
_2009_09: string;
_2009_10: string;
_2009_11: string;
_2009_12: string;
_2010_01: string;
_2010_02: string;
_2010_03: string;
_2010_04: string;
_2010_05: string;
_2010_06: string;
_2010_07: string;
_2010_08: string;
_2010_09: string;
_2010_10: string;
_2010_11: string;
_2010_12: string;
_2011_01: string;
_2011_02: string;
_2011_03: string;
_2011_04: string;
_2011_05: string;
_2011_06: string;
_2011_07: string;
_2011_08: string;
_2011_09: string;
_2011_10: string;
_2011_11: string;
_2011_12: string;
_2012_01: string;
_2012_02: string;
_2012_03: string;
_2012_04: string;
_2012_05: string;
_2012_06: string;
_2012_07: string;
_2012_08: string;
_2012_09: string;
_2012_10: string;
_2012_11: string;
_2012_12: string;
_2013_01: string;
_2013_02: string;
_2013_03: string;
_2013_04: string;
_2013_05: string;
_2013_06: string;
_2013_07: string;
_2013_08: string;
_2013_09: string;
_2013_10: string;
_2013_11: string;
_2013_12: string;
_2014_01: string;
_2014_02: string;
_2014_03: string;
_2014_04: string;
_2014_05: string;
_2014_06: string;
_2014_07: string;
_2014_08: string;
_2014_09: string;
_2014_10: string;
_2014_11: string;
_2014_12: string;
_2015_01: string;
_2015_02: string;
_2015_03: string;
_2015_04: string;
_2015_05: string;
_2015_06: string;
_2015_07: string;
_2015_08: string;
_2015_09: string;
_2015_10: string;
_2015_11: string;
_2015_12: string;
_2016_01: string;
_2016_02: string;
_2016_03: string;
_2016_04: string;
_2016_05: string;
_2016_06: string;
_2016_07: string;
_2016_08: string;
_2016_09: string;
_2016_10: string;
_2016_11: string;
_2016_12: string;
_2017_01: string;
_2017_02: string;
_2017_03: string;
_2017_04: string;
_2017_05: string;
_2017_06: string;
_2017_07: string;
_2017_08: string;
_2017_09: string;
_2017_10: string;
_2017_11: string;
_2017_12: string;
_2018_01: string;
_2018_02: string;
_2018_03: string;
_2018_04: string;
_2018_05: string;
_2018_06: string;
_2018_07: string;
_2018_08: string;
_2018_09: string;
_2018_10: string;
_2018_11: string;
_2018_12: string;
_2019_01: string;
_2019_02: string;
_2019_03: string;
_2019_04: string;
_2019_05: string;
_2019_06: string;
_2019_07: string;
_2019_08: string;
_2019_09: string;
_2019_10: string;
_2019_11: string;
_2019_12: string;
_2020_01: string;
_2020_02: string;
}

interface Tweet {
  id: string;
  likes: number;
  text: string;
  userId: string;
}

const typeDefs = gql`

  type County {
    id: string!
  
    Metro: string!
    MunicipalCodeFIPS: string!
    RegionID: string!
    RegionName: string;
    SizeRank: string!
    State: string!
    StateCodeFIPS: string!
    _1996_04: string!
    _1996_05: string!
    _1996_06: string!
    _1996_07: string!
    _1996_08: string!
    _1996_09: string!
    _1996_10: string!
    _1996_11: string!
    _1996_12: string!
    _1997_01: string!
    _1997_02: string!
    _1997_03: string!
    _1997_04: string!
    _1997_05: string!
    _1997_06: string!
    _1997_07: string!
    _1997_08: string!
    _1997_09: string!
    _1997_10: string!
    _1997_11: string!
    _1997_12: string!
    _1998_01: string!
    _1998_02: string!
    _1998_03: string!
    _1998_04: string!
    _1998_05: string!
    _1998_06: string!
    _1998_07: string!
    _1998_08: string!
    _1998_09: string!
    _1998_10: string!
    _1998_11: string!
    _1998_12: string!
    _1999_01: string!
    _1999_02: string!
    _1999_03: string!
    _1999_04: string!
    _1999_05: string!
    _1999_06: string!
    _1999_07: string!
    _1999_08: string!
    _1999_09: string!
    _1999_10: string!
    _1999_11: string!
    _1999_12: string!
    _2000_01: string!
    _2000_02: string!
    _2000_03: string!
    _2000_04: string!
    _2000_05: string!
    _2000_06: string!
    _2000_07: string!
    _2000_08: string!
    _2000_09: string!
    _2000_10: string!
    _2000_11: string!
    _2000_12: string!
    _2001_01: string!
    _2001_02: string!
    _2001_03: string!
    _2001_04: string!
    _2001_05: string!
    _2001_06: string!
    _2001_07: string!
    _2001_08: string!
    _2001_09: string!
    _2001_10: string!
    _2001_11: string!
    _2001_12: string!
    _2002_01: string!
    _2002_02: string!
    _2002_03: string!
    _2002_04: string!
    _2002_05: string!
    _2002_06: string!
    _2002_07: string!
    _2002_08: string!
    _2002_09: string!
    _2002_10: string!
    _2002_11: string!
    _2002_12: string!
    _2003_01: string!
    _2003_02: string!
    _2003_03: string!
    _2003_04: string!
    _2003_05: string!
    _2003_06: string!
    _2003_07: string!
    _2003_08: string!
    _2003_09: string!
    _2003_10: string!
    _2003_11: string!
    _2003_12: string!
    _2004_01: string!
    _2004_02: string!
    _2004_03: string!
    _2004_04: string!
    _2004_05: string!
    _2004_06: string!
    _2004_07: string!
    _2004_08: string!
    _2004_09: string!
    _2004_10: string!
    _2004_11: string!
    _2004_12: string!
    _2005_01: string!
    _2005_02: string!
    _2005_03: string!
    _2005_04: string!
    _2005_05: string!
    _2005_06: string!
    _2005_07: string!
    _2005_08: string!
    _2005_09: string!
    _2005_10: string!
    _2005_11: string!
    _2005_12: string!
    _2006_01: string!
    _2006_02: string!
    _2006_03: string!
    _2006_04: string!
    _2006_05: string!
    _2006_06: string!
    _2006_07: string!
    _2006_08: string!
    _2006_09: string!
    _2006_10: string!
    _2006_11: string!
    _2006_12: string!
    _2007_01: string!
    _2007_02: string!
    _2007_03: string!
    _2007_04: string!
    _2007_05: string!
    _2007_06: string!
    _2007_07: string!
    _2007_08: string!
    _2007_09: string!
    _2007_10: string!
    _2007_11: string!
    _2007_12: string!
    _2008_01: string!
    _2008_02: string!
    _2008_03: string!
    _2008_04: string!
    _2008_05: string!
    _2008_06: string!
    _2008_07: string!
    _2008_08: string!
    _2008_09: string!
    _2008_10: string!
    _2008_11: string!
    _2008_12: string!
    _2009_01: string!
    _2009_02: string!
    _2009_03: string!
    _2009_04: string!
    _2009_05: string!
    _2009_06: string!
    _2009_07: string!
    _2009_08: string!
    _2009_09: string!
    _2009_10: string!
    _2009_11: string!
    _2009_12: string!
    _2010_01: string!
    _2010_02: string!
    _2010_03: string!
    _2010_04: string!
    _2010_05: string!
    _2010_06: string!
    _2010_07: string!
    _2010_08: string!
    _2010_09: string!
    _2010_10: string!
    _2010_11: string!
    _2010_12: string!
    _2011_01: string!
    _2011_02: string!
    _2011_03: string!
    _2011_04: string!
    _2011_05: string!
    _2011_06: string!
    _2011_07: string!
    _2011_08: string!
    _2011_09: string!
    _2011_10: string!
    _2011_11: string!
    _2011_12: string!
    _2012_01: string!
    _2012_02: string!
    _2012_03: string!
    _2012_04: string!
    _2012_05: string!
    _2012_06: string!
    _2012_07: string!
    _2012_08: string!
    _2012_09: string!
    _2012_10: string!
    _2012_11: string!
    _2012_12: string!
    _2013_01: string!
    _2013_02: string!
    _2013_03: string!
    _2013_04: string!
    _2013_05: string!
    _2013_06: string!
    _2013_07: string!
    _2013_08: string!
    _2013_09: string!
    _2013_10: string!
    _2013_11: string!
    _2013_12: string!
    _2014_01: string!
    _2014_02: string!
    _2014_03: string!
    _2014_04: string!
    _2014_05: string!
    _2014_06: string!
    _2014_07: string!
    _2014_08: string!
    _2014_09: string!
    _2014_10: string!
    _2014_11: string!
    _2014_12: string!
    _2015_01: string!
    _2015_02: string!
    _2015_03: string!
    _2015_04: string!
    _2015_05: string!
    _2015_06: string!
    _2015_07: string!
    _2015_08: string!
    _2015_09: string!
    _2015_10: string!
    _2015_11: string!
    _2015_12: string!
    _2016_01: string!
    _2016_02: string!
    _2016_03: string!
    _2016_04: string!
    _2016_05: string!
    _2016_06: string!
    _2016_07: string!
    _2016_08: string!
    _2016_09: string!
    _2016_10: string!
    _2016_11: string!
    _2016_12: string!
    _2017_01: string!
    _2017_02: string!
    _2017_03: string!
    _2017_04: string!
    _2017_05: string!
    _2017_06: string!
    _2017_07: string!
    _2017_08: string!
    _2017_09: string!
    _2017_10: string!
    _2017_11: string!
    _2017_12: string!
    _2018_01: string!
    _2018_02: string!
    _2018_03: string!
    _2018_04: string!
    _2018_05: string!
    _2018_06: string!
    _2018_07: string!
    _2018_08: string!
    _2018_09: string!
    _2018_10: string!
    _2018_11: string!
    _2018_12: string!
    _2019_01: string!
    _2019_02: string!
    _2019_03: string!
    _2019_04: string!
    _2019_05: string!
    _2019_06: string!
    _2019_07: string!
    _2019_08: string!
    _2019_09: string!
    _2019_10: string!
    _2019_11: string!
    _2019_12: string!
    _2020_01: string!
    _2020_02: string!
  }

  type Query {
    counties: [County],
    singleCounty: (id String!)
  }
`;

const resolvers = {
  Query: {
    async counties() {
      const counties = await admin
        .firestore()
        .collection('tweets')
        .get();
      return counties.docs.map(county => county.data()) as County[];
    },
    async singleCounty() {
      const counties = await admin
        .firestore()
        .collection('tweets')
        .get();
      return counties.docs.map(county => county.data()) as County[];
    },
   
  },
  User: {
    async tweets(user) {
      try {
        const userTweets = await admin
          .firestore()
          .collection('tweets')
          .where('userId', '==', user.id)
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
    apiKey: "<APOLLO ENGINE API KEY HERE>"
  },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
