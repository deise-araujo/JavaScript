function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.` 

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} Horas.<b> Tenha um bom dia`
        document.body.style.background = '#DD9F24'
        img.src = 'manha.png'
    } else if (hora >= 12 && hora <= 18) { 
        msg.innerHTML = `Agora são ${hora} Horas. <b> Tenha uma boa tarde`
        document.body.style.background = '#7A4B5C'
        img.src = 'tarde.png'
    } else if (hora > 18 && hora <= 24){
        msg.innerHTML = `Agora são ${hora} Horas. <b> Tenha uma boa noite` 
        document.body.style.background = '#141823'
        img.src = 'noite.png'
    } else {
        msg.innerHTML = `Agora são ${hora} Horas. <b> Tenha uma boa madrugada`
        document.body.style.background = '#141823'
        img.src = 'noite.png'
    }
}
