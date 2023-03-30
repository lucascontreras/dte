// start psql on terminal: /Applications/Postgres.app/Contents/Versions/14/bin/psql -p5432 "postgres"
const { Pool } = require('pg');

const pool = new Pool(); //pg library will retrieve the variables from the .env file
// const pool = new Pool({
//   user: 'lucas',
//   host: 'localhost',
//   database: 'dte',
//   password: '',
//   port: 5432
// });

module.exports = {
  query: (text, params) => pool.query(text, params)
}