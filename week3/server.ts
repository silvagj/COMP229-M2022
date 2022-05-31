import express from 'express';

const app = express();  //creates a new express application

const port = 3000;

app.get('/', (req, res) => 
{
  res.send('Hello, World!');
});

//listener - server.listen
app.listen(port, () => 
{
  console.log(`Example app listening on port ${port}`)
});