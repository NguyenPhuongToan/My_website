const express = require('express');
const path = require('path'); // Import the 'path' module

const app = express();
const port = process.env.PORT || 3000; // Corrected 'port' to uppercase

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(process.cwd(), 'client', 'dist')));

app.get('*', (req, res) => {
  // Send the 'index.html' file
  res.sendFile(path.join(process.cwd(), 'client', 'dist', 'index.html'));
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  res.json({ message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
