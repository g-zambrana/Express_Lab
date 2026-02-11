const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log('Here');
    res.render('index')
});


app.get('/potato', (req,res)=>{
    console.log('POTATO');
    res.send("YOU GET A POTATO")
});



app.listen(3030);