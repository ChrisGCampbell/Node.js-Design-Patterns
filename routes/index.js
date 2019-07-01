var express = require('express');
var router = express.Router();
require("../main");
/* GET home page. */
router.get('/', function(req, res, next) {
  const result = add(4,5);
  res.json({ title: result });
});

module.exports = router;
