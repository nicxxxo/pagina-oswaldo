let fs=require('fs')

if(fs.existsSync('Ejercicio')){
    console.log('La carpeta ya existe')
}
else{
    fs.mkdirSync("Ejercicio",(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Carpeta actualizado')
    })
}

if(fs.existsSync('Ejercicio.txt')){
    console.log('El archivo ya existe')
}
else{

    fs.writeFileSync('./Ejercicio.txt','Hola bro')
    fs.renameSync('./Ejercicio.txt','./Ejercicio/Ejercicio.txt')
    console.log('Archivo Movido')
    }