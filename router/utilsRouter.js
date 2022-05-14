const express = require("express");
const router = express.Router();
const axios = require("axios");
  
router.get("/", (req, res) => {
let recipe = req.query.recipe;
var request = require("request");
request(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${process.env.RECIPE_API_ID}&app_key=${process.env.RECIPE_API_KEY}`,
    function (error, response, body) {
    let data = JSON.parse(body);
    if (response.statusCode === 200) {
        res.send(
        `${data.hits[0].recipe.label}: ${data.hits[0].recipe.url}`
        );
    }
    }
);
});

  module.exports = router;