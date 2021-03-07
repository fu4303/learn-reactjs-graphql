import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} from 'graphql';

const books = [
  { id: '1', name: 'book one', genre: 'Classics', authorId: '1' },
  { id: '2', name: 'book two', genre: 'Horror', authorId: '2' },
  { id: '3', name: 'book three', genre: 'Comic Book', authorId: '3' },
  { id: '4', name: 'book four', genre: 'Comic Book', authorId: '1' }
];

const authors = [
  { id: '1', name: 'author one' },
  { id: '2', name: 'author two' },
  { id: '3', name: 'author three' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authors.find((a) => a.id === parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books.filter((b) => b.authorId === parent.id);
      }
    }
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
        return books.find((a) => a.id === args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find((a) => a.id === args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
