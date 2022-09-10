require('dotenv').config();
const express = require('express');
const cors = require('cors');
const forceSsl = require('force-ssl-heroku');
const db = require('./app/src/config/db');
const authRouter = require('./app/src/routes/authRouter');
const movieRouter = require('./app/src/routes/moviesRouter');

const app = express();
app.use(forceSsl);
app.use(express.json());
app.use(cors());

// connect
db.connect();

app.use('/api', authRouter);
app.use('/api', movieRouter);

app.listen(5000, () => {
  console.log(`dang chay tren port 5000 a`);
});
