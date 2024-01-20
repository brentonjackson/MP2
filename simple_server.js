const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// In-memory storage for the value
let storedValue = 0; // seed value

// GET endpoint to retrieve the stored value
app.get('/', (req, res) => {
  console.log("value: ", storedValue);
  res.json(storedValue);
});

// POST endpoint to update the stored value
app.post('/', (req, res) => {
  const { num } = req.body;

  if (num === undefined) {
    return res.status(400).json({ error: 'New value is required in the request body.' });
  }

  storedValue = num;
  res.json({ message: 'Value updated successfully.', num});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
