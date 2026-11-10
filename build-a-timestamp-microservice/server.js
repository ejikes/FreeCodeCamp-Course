import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

app.get(["/api", "/api/:date"], (req, res) => {
  let date = req.params.date;

  if (!date) {
    date = new Date();
  } else if (!isNaN(date)) {
    date = new Date(Number(date));
  } else {
    date = new Date(date);
  }

  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

const PORT = 3000;
const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
