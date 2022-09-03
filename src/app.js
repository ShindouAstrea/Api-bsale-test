import express from "express";
//morgan Middleware
import morgan from "morgan";

//Creation  server
const app = express();
//config
app.set("port", 3000);

 //Middleware


export default app ;