import express from "express";
import { PORT } from "./config.js";
import indexroute from "./routes/index.routes.js";
import  aroutes  from "./routes/analisys.routes.js";

const app = express();

app.use(indexroute);
app.use(aroutes);

app.listen(PORT);
console.log(`server conectado al puerto: ${PORT}`);
