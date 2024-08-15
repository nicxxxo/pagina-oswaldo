// let util = require('util');
// let readline = require('readline');
// let rl = readline.createInterface(process.stdin,process.stdout);
// k=0
// let persona = {
//     Nombre: "",
//     Datos: []
// }

// function setear(){
//     let nombre =["cc", "TI", "edad", "sexo"]
//     rl.setPrompt(`Ingrese su ${nombre[0]}:`)
//     rl.prompt()
// }

// rl.question("Nombre: ",(res) =>{
//     persona.Nombre = res
//     setear(0)
// })
// rl.on('line',(entrada) =>{
//     persona.Datos.push(entrada)
//     k+=1
//     setear(k)
//     if(persona.Datos.length>4){
//         console.log(util.format("su nombre es %s y sus datos son %j ",persona.Nombre,persona.Datos))
//         process.exit()
//     }
// })
// ----------------------------------------------------------------------------------------------------------------
// let enventos= require('events')
// let emmiter = new enventos.EventEmitter()

// emmiter.on('saludo',(res) =>{
//     console.log(res)
// })
// emmiter.emit('saludo','Hola mundo')
// let fs=require('fs')

// let archivo=`LE.txt`
// let mas=`Nueva linea\n`
// fs.writeFileSync(archivo,mas,mas1)
// let file=fs.readdirSync('./')
// let archivo1=fs.readFileSync('LE.txt','utf-8')
// console.log(archivo1)

// ----------------------------------------------------------------------------------------------------------------

let events=require('events')	
let util=require('util')

let Persona = function(nombre){
    this.nombre=nombre
}

util.inherits(Persona,events)
let una = new Persona('OPM')
una.on('hablar',(res)=>{
    console.log(`${una.nombre}: ${res}`)
})

una.emit('hablar','Hola mundo')



module.exports = Persona

