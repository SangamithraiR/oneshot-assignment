import { Schema, model } from 'mongoose';

// Create Schema
const StudentSchema = new Schema({
  Id: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true,
    unique: true
  },
  Year_Of_Batch: {
    type: Date.UTC.year,
    required: true
  },
  College_Id: {
    type: String,
    required: true,
  },
  Skills: {
    type: String,
    required: true
  },
  
});

const User = model('student', StudentSchema);

export default User;
