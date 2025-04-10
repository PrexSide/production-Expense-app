const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  reference: {
    type: String,
  },
  description: {
    type: String,
    required: [true , 'Description is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  }
},{timestamps: true});

const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = transactionModel;