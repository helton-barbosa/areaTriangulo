import data from 'readline-sync'

console.log("==========================================")
console.log("=    CALCULAR A ÁREA DE UM TRINÂNGULO    =")
console.log("==========================================\n")

let trianguloBase = data.question("Informe o valor da base do triângulo: ")
let trianguloAltura = data.question("Informe o valor da altura do triângulo: ")

let trianguloArea = ((trianguloBase * trianguloAltura) / 2)

console.log(`\n==> A área do triângulo é de ${trianguloArea}.`)