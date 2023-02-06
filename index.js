require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/health", (req, res) => {
  return res.json({
    statusCode: 200,
    message: "OK",
  });
});

app.listen(port, () => {
  console.log(`🔥 Server listening on port ${port}`);
});
