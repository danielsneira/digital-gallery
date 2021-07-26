import express from "express";
import cors from "cors";
import history from "connect-history-api-fallback";
import dbConnection from "./database/config.js";
import artist from "./routes/artist";
import art from "./routes/art";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use("/api/artist", artist);
app.use("/api/art", art);
//vuejs modo history necesario para SPA
app.use(history());
//vistas
app.use(express.static(__dirname + "/public"));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
	console.log("Servidor Encendido, en el puerto:", app.get("port"));
});

dbConnection();
