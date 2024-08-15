
let preguntas = ['¿Nombres?', '¿Edad?', '¿Sexo?']
 let respuestas = []

 function preguntar (i){
    process.stdout.write(preguntas[i])
 }
preguntar(0)
 process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim())
    if(respuestas.length<preguntas.length){
        preguntar(respuestas.length)
    }
    else{
        process.stdout.write(`Su nombre es: ${respuestas[0]}, Su edad es: ${respuestas[1]}, su sexo es: ${respuestas[2]}`)
        process.exit()
    }
 })

