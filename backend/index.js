const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const productRoutes = require('./routes/product');

app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});