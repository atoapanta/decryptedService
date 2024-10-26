import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import path from "path";

// Import swagger configuration
import setupSwagger from "./config/swagger.js";

//Import routes
import DecryptedRoute from "./routes/Decrypted.routes.js";
import { corsConfig, limiter } from "./lib/helpers.js";

const app = express();

//Middlewares
app.use(helmet());
app.use(morgan("combined"));
app.set("trust proxy", 1);
app.use(compression());
app.use(limiter);
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/decrypted-service/api/V1", DecryptedRoute);

//Config Swagger
setupSwagger(app);

//Public statics
app.use(express.static(path.join(process.cwd(), "public")));

export { app };
