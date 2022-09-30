function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var resultado = document.getElementById('res')
    var anoNascimento = document.getElementById('txtano')
    var idade = ano - anoNascimento
    var idadeNum = idade.valueOf

    if (idadeNum < 0 || anoNascimento > ano) {
        resultado.innerHTML = `ERRO`
    } else if (idadeNum >= 14) {
        resultado.innerHTML = `Você é uma jovem de ${idade} anos`
    } else {
        resultado.innerHTML = `${idade}`
    }
}

/*var data = new Date()
var ano = data.getFullYear()
var anoNascimento = 2003
var idade = ano - anoNascimento
console.log(idade)*/