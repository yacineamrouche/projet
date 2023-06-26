const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getAll", itemController.selectAll);
router.post("/post", itemController.postOne)
router.put("/update/:_id",itemController.update)
router.delete("/delete/:_id", itemController.deleteItem)

module.exports = router;
