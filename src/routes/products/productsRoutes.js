const express = require('express');
const router = express.Router();
const productsController = require('../../controllers').productsController;
const { verifyToken } = require('../../middlewares/authentication');

router.get("/", productsController.get);
router.post("/",verifyToken, productsController.post);
router.put("/:id",verifyToken, productsController.update);
router.delete("/:id",verifyToken, productsController.delete);


module.exports = router;