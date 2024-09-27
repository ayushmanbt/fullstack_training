const express = require("express");

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Hello express")
})

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201).send(body);
})

app.listen(PORT, () => {
    console.log(`The server is listening to port ${PORT}`)
})
