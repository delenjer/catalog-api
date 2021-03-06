const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

app.use('/api', express.static('api', {
  index: 'phones.json',
  extensions: ['json'],
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});