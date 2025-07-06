const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use('/', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running...`));
