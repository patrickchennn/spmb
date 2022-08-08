const express = require("express");
const router = express.Router();
const {
  getBiodatas,getBiodata,
  setBiodata,
  updateBiodata,
  deleteBiodata
} = require("../controllers/biodataController.js");

router.route('/').get(getBiodatas).post(setBiodata);
router.route("/:id").get(getBiodata).put(updateBiodata).delete(deleteBiodata);

module.exports = router;