require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://rafyc:Benbub0611%40!@cluster0.rigvqrn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('Connected', () => {
  console.log('Connected to Mongo');
});

mongoose.connection.on('error', (err) => {
  console.error('Faild to connect to Mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3003, () => {
  console.log('Listening on 3003');
});
