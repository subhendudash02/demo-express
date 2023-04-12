const express = require("express");

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get("/api/hello/", (req, res) => {
    res.json({status: "ok"});
});

app.listen(port, () => {
    console.log(`api listening at ${port}`);
});