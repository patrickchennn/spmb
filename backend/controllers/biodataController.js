const asyncHandler = require("express-async-handler");
const biodataModel = require("../model/biodataModel.js");

/**
 * @desc Get all registered student data
 * @route GET /biodatas
 * @access Private
 */
const getBiodatas = asyncHandler(async (req,res) => {
  const biodatas = await biodataModel.find();
  res.status(200).json(biodatas);
});


/**
 * @desc Get individual registered student data
 * @route GET /biodata
 * @access Private
 */
const getBiodata = asyncHandler(async (req,res) => {
  const biodata = await biodataModel.findById(req.params.id);
  if(!biodata){
    res.status(400).json(biodata);
  }
  res.status(200).json(biodata);
});


/**
 * @desc Set biodata
 * @route POST /biodata
 * @access Private
 */
const setBiodata = asyncHandler(async (req,res) => {
  if(!req.body.namalengkap){
    res.status(400);
    throw new Error("please add a name");
  }
  const biodata = await biodataModel.create({
    namalengkap: req.body.namalengkap,
    kebangsaan: req.body.kebangsaan,
    tanggalLahir: req.body.tanggalLahir,
    lokasiKotaLahir: req.body.lokasiKotaLahir,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    prodi: req.body.prodi,
    tanggalRegistrasi: new Date().toLocaleString(),
    // pasFoto:{
    //   data: Buffer,
    //   contentType: String,
    //   path: String,
    // }
  });
  res.status(200).json(biodata);
});


/**
 * @desc Update biodata
 * @route PUT /biodata/:id
 * @access Private
 */
const updateBiodata = asyncHandler(async (req,res) => {
  const id = req.params.id;
  const biodata = await biodataModel.findById(id);
  if(!biodata) res.status(400).json(biodata);
  
  const updatedBiodata = await biodataModel.findByIdAndUpdate(
    id,
    req.body,
    {new:true}
  )
  res.status(200).json(updatedBiodata);
});


/**
 * @desc Delete biodata
 * @route DELETE /biodata/:id
 * @access Private
 */
const deleteBiodata = asyncHandler(async (req,res) => {
  const id = req.params.id;
  const biodata = await biodataModel.findById(id);
  if(!biodata) res.status(400).json(biodata);

  await biodataModel.findByIdAndDelete(id);
  res.status(200).json({id});
});

module.exports = {
  getBiodatas,
  getBiodata,
  setBiodata,
  updateBiodata,
  deleteBiodata
}

/*
{
      namalengkap: req.body.namalengkap,
      kebangsaan: req.body.kebangsaan,
      tanggalLahir: req.body.tanggalLahir,
      lokasiKotaLahir: req.body.lokasiKotaLahir,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      prodi: req.body.prodi,
      tanggalRegistrasi: new Date().toLocaleString(),
      // pasFoto:{
      //   data: Buffer,
      //   contentType: String,
      //   path: String,
      // }
    }
*/