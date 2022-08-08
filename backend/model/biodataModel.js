const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
  namalengkap: String,
  kebangsaan:String,
  tanggalLahir:String,
  lokasiKotaLahir: String,
  email: String,
  phonenumber: String,
  prodi:String,
  tanggalRegistrasi:{type: Date,default: new Date().toLocaleString()},
  // pasFoto:{
  //   data: Buffer,
  //   contentType: String,
  //   path: String,
  // }
});
const biodataModel = mongoose.model('Biodata', biodataSchema);

module.exports = biodataModel;

/*
{
  timestamps: true
}
*/