import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

export default model('Book', BookSchema);
