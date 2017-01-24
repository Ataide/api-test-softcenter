var express = require('express');
var JsonDB = require('node-json-db');
var db = new JsonDB("users", true, false)


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(db.getData("/"));
});

router.post('/', function(req, res, next) {
  var param_name = req.body.name;
  var param_email = req.body.email;
  var param_password = req.body.password;

  try {
      db.push("/users[]", {name:param_name, email:param_email, password: param_password }, true);
      res.json({status: 'Inserido com sucesso.'}, 200)
  } catch (e) {
     res.json({error: 'Não inserido'}, 500);
  }

});

module.exports = router;
