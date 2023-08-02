import { createPool } from "mysql2/promise";
 const pool = createPool({
  host: "localhost",
  port: 3303,
  user: "root",
  password: "daniel",
  database: "diagovet",
});

export default pool
// export const pool = createPool({
//     host: 'localhost',
//     port: 3303,
//     user: 'root',
//     password:'daniel',
//     database:'diagovet'
// })
