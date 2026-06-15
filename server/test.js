import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Working");
});

const server = app.listen(3000, () => {
    console.log("Listening");
    console.log("Address:", server.address());
});

setInterval(() => {
    console.log("alive");
}, 5000);