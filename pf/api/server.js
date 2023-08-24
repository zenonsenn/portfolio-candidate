const express = require("express");
const cors = require("cors");
const app = express(),
    bodyParser = require("body-parser");

const testData = [{ name: "test", id: "11" }];

console.log("hello world!");
// nodemon sucessful

app.use(cors());

app.use(bodyParser.json());

// everything below is for development
port = 3080;

app.get("/api/out", (req, res) => {
    console.log("api called");
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(testData));
});

app.get("/api/test", (req, res) => {
    console.log("api called");
    res.status(200).json({ message: "hello from the backend" });
});

app.listen(port, () => console.log(`listening on port ${port}`));

// everything below is for production
module.exports = (req, res) => {
    console.log("api called");
    res.status(200).json({ message: "hello from the backend" });
};
