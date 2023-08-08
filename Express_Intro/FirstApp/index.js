const express = require("express");
const app = express();
app.use((req, res) => {
  console.log("We got a new request!!!");
  res.send("<h1>This is my homepage!</h1>");

  res.send({ colors: "red" });
});
app.get("/", (req, res) => {
  res.send("This is the home page!");
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req;
  console.log(subreddit);
  res.send("This is a subreddit");
});
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req;
  console.log(`<h1>Viewing Post ID: ${postId} on the  ${subreddit} subreddit`);
  res.send("This is a subreddit");
});

app.post("cats", (req, res) => {
  res.send("Post request to /cats");
});
app.get("/cats", (req, res) => {
  res.send("Meow");
});
app.get("/dogs", (req, res) => {
  res.send("woof");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found!");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});
app.get("*", (req, res) => {
  res.send("I dont know that path");
});

// console.dir(app);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
