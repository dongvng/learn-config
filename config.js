require('dotenv').config();
const config = require('config');

console.log('TESTING CONFIG');
console.log(config.get('Customer.dbConfig.host'));

console.log('load dotenv');
// console.log(process.env);
// console.log(config.get('name'));
