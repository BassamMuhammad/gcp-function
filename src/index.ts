import {onRequest} from "firebase-functions/v2/https";
import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as cors from 'cors'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: true }));

app.get("/test", (req, res) => {
    res.send("success")
})

export const a = onRequest(app)