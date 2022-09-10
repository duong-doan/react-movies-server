const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
  maPhim: Number,
  tenPhim: String,
  biDanh: String,
  trailer: String,
  hinhAnh: String,
  moTa: String,
  maNhom: String,
  ngayKhoiChieu: Date,
  danhGia: Number,
});

module.exports = mongoose.model('Movie', Movie);
