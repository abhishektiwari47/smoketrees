const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
  });
  
  const addressSchema = new mongoose.Schema({
    address: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });
  
export const User = mongoose.model('User', userSchema);
export const Address = mongoose.model('Address', addressSchema);