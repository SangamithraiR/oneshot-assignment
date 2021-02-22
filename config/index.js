import dotenv from 'dotenv';
// get mongo url and jwtsecret from here
//  https://cloud.mongodb.com/v2/603355913e60635c4c851964#clusters?fastPoll=true
// and store it in default.json 
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET
};
