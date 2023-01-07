'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const BookSchema = new Schema({
    title: { type: String },
    sub_title: { type: String, default: '' },
    binding: { type: String, default: '' },
    images: { type: String, default: '' },
    author: { type: String },
    price: { type: Number },
    language: { type: String, default: '中文' },
    publisher: { type: String, default: '' },
    publish_date: { type: Date },
    category: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  });

  return mongoose.model('Book', BookSchema);
};
