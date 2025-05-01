const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas
app.get("/", (req, res) => {
  res.json({
    message: "primeira api criada com sucesso!",
    character: [{ name: "ryck sanches" }, { name: "morty sanches" }],
  });
});

app.listen(3000);
