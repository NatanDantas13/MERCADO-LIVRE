const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello, this is your backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// gerenciamento de rotas:

// const express = require('express');
// const app = express();
// const port = 3000;

// const apiRoutes = require('./routes/api');

// app.use('/api', apiRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
