const express = require('express');
const router = express.Router();
const userController = require('../../controllers').userController;


router.get("/", userController.get);
router.post("/", userController.post);
router.delete("/:id", userController.delete);
router.put("/", userController.update);

module.exports = router;