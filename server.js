const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/user');
app.use('/api/customers', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
