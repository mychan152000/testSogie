const result = require("../general_sex_orient.json");
const specifict_result = require("../specific_sex_orient.json");
const express = require("express");
const path = require("path");
const { nextTick } = require("process");
const router = express.Router();

router.get("/quiz", function (req, res) {
  return res.render("quiz", { layout: "quiz" });
});
router.get("/", function (req, res) {
  return res.render("index");
});

router.get("/api/result", function (req, res) {
  let req_data = req.query.key;
  if (result[req_data] != undefined) {
    res.send(result[req_data]);
  } else {
    res.send("Not found");
  }
});

router.get("api/spec-result", function (req, res) {
  let req_data = req.query.key;
  if (specifict_result[req_data] != undefined)
    res.send(specifict_result[req_data]);
  else res.send("Not found");
});

router.post("/result", function (req, res) {
  console.dir(req.body);
  res.render("result", { layout: "result", result: req.body.result });
});
module.exports = router;
