const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "외부 API 사용해보기" });
});

app.listen(PORT, () => {
  console.log(`server start!! http://localhost:${PORT}...`);
});
