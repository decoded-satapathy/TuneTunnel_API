"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const signin_1 = require("./routes/signin");
const download_1 = require("./routes/download");
const lyrics_1 = require("./routes/lyrics");
const search_1 = require("./routes/search");
const signup_1 = require("./routes/signup");
const stream_1 = __importDefault(require("./routes/stream"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/download", download_1.downloadRouter);
app.use("/lyrics", lyrics_1.lyricsRouter);
app.use("/search", search_1.searchRouter);
app.use("/signin", signin_1.signInRouter);
app.use("/signup", signup_1.signUpRouter);
app.use("/stream", stream_1.default);
app.listen(3000);
console.log("Server is listening on port 3000");
