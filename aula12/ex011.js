var idade = 100

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65 && idade < 99){
    console.log('Voto opcional')
}else if (idade > 99){
    console.log('Rapaz você é velho(a) em, parabéns') 
}else {
    console.log('Voto obrigatorio')
}