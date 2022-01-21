const express = require('express');
const router = express.Router();
const mediaController = require('../../controllers').mediaController;
const { verifyToken } = require('../../middlewares/authentication');

router.get("/:id", mediaController.get);
router.post("/",verifyToken, mediaController.post);
router.delete("/",verifyToken, mediaController.delete);

module.exports = router;