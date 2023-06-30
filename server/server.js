import express from "express";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get("/api", (req, res) => {
  res.json({ beImg: "/pic.jpeg" });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
