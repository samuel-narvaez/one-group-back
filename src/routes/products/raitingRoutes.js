const express = require('express');
const router = express.Router();
const raitingController = require('../../controllers').raitingController;
const { verifyToken } = require('../../middlewares/authentication');

router.get("/:idProduct", raitingController.getRaiting);
router.post("/",verifyToken, raitingController.post);

module.exports = router;