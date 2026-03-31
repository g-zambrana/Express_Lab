const express = require ('express')
const app = express();
const userRouter = require('./routes/users');
const userPosts = require('./routes/posts')
const wordRouter = require ('./routes/words');

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.get('/',(req,res) =>{
    console.log('here')
    res.render('index')
})

app.use('/posts', userPosts)
app.use('/users', userRouter)
app.use('/words' , wordRouter)


app.listen(3030);