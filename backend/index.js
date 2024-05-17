const express = require('express');
const cors = require('cors'); // Importing cors package
const app = express();
const PORT = process.env.PORT || 3000;
const productRoutes = require('./routes/product'); // Ensure the correct path

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.use('/products', productRoutes); // Mounting the routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});