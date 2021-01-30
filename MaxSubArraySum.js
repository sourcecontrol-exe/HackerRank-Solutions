const fs = require('fs');

fs.readFile('./textFile.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err)
    }
    data = data.replace(/\s*$/, '').split('/n').map( str =>{
        str.replace(/\s*$/, '');
    })

    console.log(data)
