const express = require("express");

const app = express();

const PORT = 3000;
const serverName = process.env.SERVER_NAME || "unknown";

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Node.js!",
        server: serverName
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});