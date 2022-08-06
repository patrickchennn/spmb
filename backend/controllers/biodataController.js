const asyncHandler = require("express-async-handler");

/**
 * @desc Get biodata
 * @route GET /biodata
 * @access Private
 */
const getBiodatas = asyncHandler(async (req,res) => {
  res.status(200).json({message: "Get goals"});
});

/**
 * @desc Set biodata
 * @route POST /biodata
 * @access Private
 */
const setBiodata = asyncHandler(async (req,res) => {
  if(!req.body.fullname){
    res.status(400)
    throw new Error("please add a name");
  }

  res.status(200).json({message:"send biodata"});
});

/**
 * @desc Update biodata
 * @route PUT /biodata/:id
 * @access Private
 */
const updateBiodata = asyncHandler(async (req,res) => {
  res.status(200).json({message:`update ${req.params.id}`});
});

/**
 * @desc Delete biodata
 * @route DELETE /biodata/:id
 * @access Private
 */
const deleteBiodata = asyncHandler(async (req,res) => {
  res.status(200).json({message:`delete ${req.params.id}`});
});

module.exports = {
  getBiodatas,
  setBiodata,
  updateBiodata,
  deleteBiodata
}
