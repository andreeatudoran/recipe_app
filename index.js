const express = require('express')
const messagesRouter = require("./router/messagesRouter");
const bodyParser = require("body-parser");

const app = express();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/messages", messagesRouter);

//am creat un server aici
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Recipe app listening on port ${port}!`)
});

