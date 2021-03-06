import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} from 'graphql';

const books = [
  { id: '1', name: 'book one', genre: 'Classics' },
  { id: '2', name: 'book two', genre: 'Horror' },
  { id: '3', name: 'book three', genre: 'Comic Book' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books[args.id];
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
