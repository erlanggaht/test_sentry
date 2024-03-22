const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({origin:"*"}))
// Route untuk menimbulkan error 404
app.get('/notfound', (req, res) => {
  res.status(404).send('Error 404: Not Found');
});

// Route untuk menimbulkan error 500
app.get('/servererror', (req, res) => {
  res.status(500).send('Error 500: Internal Server Error');
  // res.status(200).send("asdasd")
});

app.get('/json', (req, res) => {
  res.status(200).json({testing: "jfbdssdsadkjfnd!"});
  // res.status(200).send("asdasd")
});

// Jalankan server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});