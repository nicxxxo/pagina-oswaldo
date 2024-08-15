let fs=require('fs')
fs.mkdirSync('Hoy')
fs.mkdir('mañana',(err)=>{
    if(err) 
        throw err
})	
