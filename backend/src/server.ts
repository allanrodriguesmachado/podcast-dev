import express, {  Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from 'cors';

const app = express();

app.use(express.json);
app.use(cors())
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(404).json({
            error: err.message
        })
    }

    return response.status(500).json({
        error: 'error',
        message: 'Internal server error'
    })
})

app.listen(3333, () => {console.log("Server ON")});