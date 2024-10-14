const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = 26000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.use(express.static("public"));

const salasDeAula = [
  { id: 1, descricao: "Sala 101", localizacao: "Prédio A", capacidade: 30, removido: false },
  { id: 2, descricao: "Sala 102", localizacao: "Prédio B", capacidade: 25, removido: false },
];

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/manutSalaDeAula", (req, res) => {
  res.render("manutSalaDeAula.html", { salasDeAula });
});

app.listen(port, () => {
  console.log(`Servidor Nunjucks rodando na porta ${port}`);
});