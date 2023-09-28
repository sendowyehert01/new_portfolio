const dotenv = require("dotenv").config();

const MONGODB_UN = process.env.MONGODB_UN;
const MONGODB_PW = process.env.MONGODB_PW;
const MONGODB_DB = process.env.MONGODB_DB;
// const MONGODB_URL = 'mongodb://127.0.0.1:27017/FoodCartel-DB';
const MONGODB_URL = `mongodb+srv://sendowyehert01:4321%40Sendow@cluster0.svyr0nf.mongodb.net/SendoDB?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT): 3000;


module.exports = {
 mongodb:{
    url: MONGODB_URL
 },
 server:{
    port:SERVER_PORT
 }
};
