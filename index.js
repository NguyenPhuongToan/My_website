// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Serve các file tĩnh từ thư mục public
// app.use(express.static('public'));

// // Route chính để gửi file index.html
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// // Khởi động server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = process.env.port || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});
app.post('register' , (req,res) =>{
  const { username, email, password} =req.body;
  res.json({message: 'User registered successfully'});

})

app.listen(port, ()=>{
  console.log('Server is running on port ${port}');
});
