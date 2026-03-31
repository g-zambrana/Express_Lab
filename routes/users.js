const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('/user yuh')
})

router.get('/new',(req,res)=>{
    res.send('/user/new yuhhhh')
})

module.exports = router