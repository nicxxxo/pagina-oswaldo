// const {stdout} = require('process')
// let uno = require('./p')
// let exec = require('child_process').exec
// exec('dir', (err, stdout) => {
//     if (err) {
//         throw err
//     }
//     console.log('Sus archivos y carpetas son:')
//     console.log(stdout)
// })



// --------ASINCRONO----------------
// let fs = require('fs')
// fs.readFile('pp.txt', 'utf-8', (err, archivo) => {
//     if (err) {
//         throw err
//     }
//     console.log(archivo)
// })

// --------SINCRONO----------------
// let fs = require('fs')
// let file=fs.readdirSync('./')
// let archivo=fs.readFileSync('pp.txt','utf-8')
// console.log(archivo)