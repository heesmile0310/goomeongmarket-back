const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likeController");

router.post("/addlike", likeController.addLike);
router.get("/likeinfo", likeController.likeInfo);
router.delete("/removelike", likeController.removelike);

module.exports = router;
