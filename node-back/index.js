const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.listen(4000, ()=>{
    console.log("server listening at port 4000");
})