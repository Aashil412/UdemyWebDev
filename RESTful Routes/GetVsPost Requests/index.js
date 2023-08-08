const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

app.use(urlencoded({ extended: true }));
app.use(expres.json());

app.get('/tacos', (req,res) => {
    res.send('GET /tacos');
})
app.post('/tacos', (req, res) => {
    const { meat,qty } = req.body;
    res.send(`Ok here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
  console.log("App");
});
