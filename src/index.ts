import express from "express";

const app = express();
const port = 3000;

// middleware example
const requestTime = function (
  req: { requestTime: number },
  res: any,
  next: () => void,
) {
  req.requestTime = Date.now();
  next();
};

app.get("/api/v1/", (req, res) => {
  res.send("살아있다!");
});

// oracle

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
