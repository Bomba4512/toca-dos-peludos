import express = require("express");
import cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Toca dos Peludos rodando 🐾");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});