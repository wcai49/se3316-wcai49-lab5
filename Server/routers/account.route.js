const express = require('express');
const router = express.Router();

const account_controller = require('../controllers/account.controller');



//authentication
router.get('/users', account_controller.account_all)
router.post('/authenticate', account_controller.account_Auth);
router.post('/signup', account_controller.account_SignUp);
router.put('/giveP', account_controller.givePrivilege);
router.put('/cancelP', account_controller.cancelPrivilege);
router.put('/setDe', account_controller.setDeactivated);
router.put('/cancelDe', account_controller.cancelDeactivated);


module.exports = router;