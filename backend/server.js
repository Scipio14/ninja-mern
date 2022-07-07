require('dotenv').config();
const express = require('express');

//express app
const app = express();

app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.json({msg:"Welcome to the App"});
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})