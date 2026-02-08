const { postJob } = require("../controllers/job.controllers");
const express = require("express");
const router = express();

router.post("/post-job", postJob);

module.exports = router;
