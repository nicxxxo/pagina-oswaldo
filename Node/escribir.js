let fs=require('fs')

let archivo=`cenigraf.txt`

if(fs.existsSync(archivo)){
    console.log('El archivo existe')
}
else{
    console.log('El archivo no existe')
}
// ---------SINCRONO----------------
let mas=`Nueva linea\n`
fs.writeFileSync(archivo,mas)

// ---------ASINCRONO----------------

fs.writeFile(archivo,mas,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Archivo actualizado')
})