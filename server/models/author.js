import { Schema, model } from 'mongoose';

const AuthorSchema = new Schema({
  name: String
});

export default model('Author', AuthorSchema);
