const express = require("express");
const router = express.Router();
const {
  getBiodatas,
  setBiodata,
  updateBiodata,
  deleteBiodata
} = require("../controllers/biodataController.js");

router.route('/').get(getBiodatas).post(setBiodata);
router.route("/:id").put(updateBiodata).delete(deleteBiodata);

module.exports = router;