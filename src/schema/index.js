const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    _id: ID
    plot: String
    genres: [String]
    runtime: Int
    cast: [String]
    num_mflix_comments: Int
    title: String
    fullplot: String
    countries: [String]
    released: String
    directors: [String]
    reted: String
    awards: Awards
    lastupdated: String
    year: Int
    imdb: Imdb
    type: String
    tomatoes: Tomatoes
  }

  type Awards {
    wins: Int
    nominations: Int
    text: String
  }

  type Imdb {
    rating: Float
    votes: Int
    id: Int
  }

  type Viewer {
    rating: Float
    numbReviews: Int
    meter: Int
  }

  type Tomatoes {
    viewer: Viewer
    lastUpdated: String
  }

  type Query {
    movies: [Movie]
  }
`;

module.exports = typeDefs;
