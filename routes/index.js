var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api de Teste SoftCenter. Tudo Funcionando.' });
});

module.exports = router;
