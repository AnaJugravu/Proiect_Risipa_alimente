import express from "express";
import cors from "cors";
import { router } from "./routes/config.js";
import { logger as loggerMiddleware } from './middlewares/logger.js';
import { synchronizeDatabase } from "./models/config.js";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use(loggerMiddleware);
app.use("/api/v1", router);

const server = app.listen(PORT, async () => {
    try {
        await synchronizeDatabase();
        console.log(`Server started on http://localhost:${PORT}`);
    } catch (err) {
        console.log("There was an error with the database connection");
        server.close();
    }
});

server.on("close", () => {
    console.log("Stopping the server");
});