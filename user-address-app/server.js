const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {Address, User} = require('./db/db.js')
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/register', async (req, res) => {
  const { name, address } = req.body;
  try {
    const user = await User.create({ name });
    await Address.create({ address, userId: user._id });
    res.status(201).send('User and address saved successfully');
  } catch (error) {
    res.status(500).send('Error saving data');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
