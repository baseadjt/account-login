const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');

app.use('/', indexRoute);
app.use('/login', loginRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

