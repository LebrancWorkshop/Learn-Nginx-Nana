const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3000;

const web = path.join(__dirname, 'index.html');

app.use(express.static(web));

app.get('/', (req, res) => {
  res.sendFile(web);
  console.log('GET Success.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
