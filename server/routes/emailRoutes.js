const router = require('express').Router();

const { sendEmail } = require('../controllers/emailCon');

router.route('/send').post(sendEmail)

module.exports = router;