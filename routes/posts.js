const express = require('express');
const posts = express.Router();

posts.get('/', (req,res)=>{
    res.send('/post yuh')
})

posts.get('/new',(req,res)=>{
    res.send('/post/new yuhhhh')
})

module.exports = posts