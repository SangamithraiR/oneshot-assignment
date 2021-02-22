import { Schema, model } from 'mongoose';

// Create Schema
const CollegeSchema = new Schema({
  Id: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true,
    unique: true
  },
  Year_Founded: {
    type: Date.UTC.year,
    required: true
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  No_Of_Students: {
    type: String,
    required: true,
  },
  Courses: {
    type: String,
    required: true
  }

});

const College = model('college', CollegeSchema);

export default College;
