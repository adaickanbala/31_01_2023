const express = require("express")
// const post_data = require("./routerops")
const post_data = require("./routerops")

const router = express.Router();
router.post("/create",post_data)

module.exports = router;