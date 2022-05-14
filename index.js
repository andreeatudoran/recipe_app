const express = require('express')
const cors = require("cors");
const messagesRouter = require("./router/messagesRouter");
const utilsRouter = require("./router/utilsRouter")
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/messages", messagesRouter);
app.use("/utils", utilsRouter);

//am creat un server aici
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Recipe app listening on port ${port}!`)
});

