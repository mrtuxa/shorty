const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connect to DB
connectDB();
app.use(express.json({ extended: false }));

// Routes
app.use('/', require('./routes/index'))
app.use('/api/v1', require('./routes/url'))

const port = 5000;


app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

