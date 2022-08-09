const {mongoose} = require('mongoose');

const biodataSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
  },
  { 
    timestamps: true,
    versionKey: false,
  }
);
const biodataModel = mongoose.model('Biodata', biodataSchema,"biodata");

module.exports = biodataModel;

/*
{
  timestamps: true
}
*/