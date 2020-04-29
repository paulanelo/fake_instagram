var express = require('express');
var router = express.Router();
const { verify } = require('../middlewares/verifyUser');

const AuthController = require("../constrollers/AuthController");

router.get('/', AuthController.showLogin);
router.get('/registro',AuthController.showRegistro);
router.get('/home', verify, AuthController.showHome);
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);
module.exports = router;
