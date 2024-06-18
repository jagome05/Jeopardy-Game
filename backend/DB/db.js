const Pool  = require("pg").Pool;

const PGUSER = process.env.PGUSER
const PGPASSWORD = process.env.PGPASSWORD
const PGHOST = process.env.PGHOST
const PGPORT = process.env.PGPORT
const PGDATABASE = process.env.PGDATABASE

//* creates new connection instance
const pool = new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
})

//* export
module.exports = pool;