const express = require("express");
const path = require("path");

const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(3000, () => {
  console.log("Aplicação web rodando na porta 3000");
});
