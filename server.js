const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();


// const countryRouter = require("./data/country/countryRouter");
// const authRouter = require("./data/auth/authRouter");
// const questionsRouter = require("./data/questions/questionsRouter");
// const msgsRouter = require("./data/messages/messagesRouter");
// const matchesRouter = require("./data/matches/matchRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use("/api",countryRouter);
// server.use("/api/auth",authRouter);
// server.use("/api/restricted",questionsRouter);
// server.use("/api/restricted/msgs",msgsRouter);
// server.use("/api/restricted/matches",matchesRouter);

module.exports = server;