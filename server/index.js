import 'dotenv/config';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';

const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// connecting to MongoDB
(async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } catch (error) {
    console.log(
      `MongoDB connection error ${error}. Please make sure MongoDB is running.`
    );
  }
})();

app.use(express.static(path.resolve(__dirname, '../client')));

// if production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
    res.end();
  });
}

app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});
