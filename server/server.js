const express = require('express');
const app = express();
const port = 3001; 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
