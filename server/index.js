import express from "express";
import { PORT } from "./config.js";
import indedexxx from "./routes/index.routes.js"
import useroutes  from "./routes/anaimals.routes.js";

const app = express();
app.use(express.json());
app.use(indedexxx); 

app.use(useroutes);

app.listen(PORT);
console.log(`server conectado al puerto: ${PORT}`);
