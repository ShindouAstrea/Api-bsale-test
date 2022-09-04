import express from "express";
//api routes
import routes from "./routes/product-routes";
import routes2 from "./routes/category-routes";
//morgan Middleware
import morgan from "morgan";

//Creation  server
const app = express();
//config
app.set("port", 3000);

 //Middleware
 // This method use morgan and with the parameter "dev", morgan tell us how detail should show the server
app.use(morgan("dev"));
// "call for methods , if user make request to the specified endpoint"
app.use("/api/v1/products",routes) ;
app.use("/api/v1/categories",routes2) ;

export default app ;