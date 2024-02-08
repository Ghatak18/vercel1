const express = require("express");
const app = express();
app.use(express.json())

app.get('/', (req,res) =>{
    res.send("hellowwwwwwwwwwwww");
})

app.listen(5000);