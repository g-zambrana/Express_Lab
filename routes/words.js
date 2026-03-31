const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;


router.get('/', (req,res)=>{
    res.send('Word Homepage')
});

router.get('/wotd', async (req,res)=>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition]= wordArray;
    res.render('wotd', {word:word, part:part, definition:definition});
});

router.get('/allwords', async (req,res)=>{
    const allWords = await getAllWords();
    res.render('allwords', {allwords:allWords});
})

let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        return wordArray;
    } catch (err){
        console.log("There was an error")
    }  
};


let getAllWords = async()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let allwords = [];
        for (line of lines){
            let [word,part,defn] = line.split('\t');
            let subObj = {word:word, part:part, defn:defn};
            allwords.push(subObj);
        }
        return allwords;
    } catch(err){
        console.log("There was an error")
    }
};

module.exports= router;