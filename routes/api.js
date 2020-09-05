const result = require("../general_sex_orient.json");
const specifict_result = require("../specific_sex_orient.json");
const express = require("express");

const router = express.Router();

router.get("/quiz", function (req, res) {
  return res.render("../public/quiz.html");
});
router.get("/", function (req, res) {
  return res.render;
});

router.get("/result", function (req, res) {
  let req_data = req.query.key;
  if (result[req_data] != undefined) {
    res.send(result[req_data]);
  } else {
    res.send("Not found");
  }
});

router.get("/spec-result", function (req, res) {
  let req_data = req.query.key;
  if (specifict_result[req_data] != undefined)
    res.send(specifict_result[req_data]);
  else res.send("Not found");
});

module.exports = router;
