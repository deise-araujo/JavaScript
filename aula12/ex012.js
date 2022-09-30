var agora = new Date()
var horas = agora.getHours()

console.log(`São ${horas} horas`)

if (horas >= 6 && horas < 12) {
    console.log('Tenha um bom dia')
} else if (horas >= 12 && horas < 24) {
    console.log('Tenha uma boa tarde')
} else if (horas < 6){
    console.log('tenha uma boa madrugada')
} else {
    console.log('Tenha uma boa noite')
}