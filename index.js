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
