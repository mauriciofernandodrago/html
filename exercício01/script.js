function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    var fundo = window.document.getElementById('fundo')
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        fundo.style.background = '#63adb5'
    } else if (hora >= 12 && hora <18){
        img.src = 'fototarde.png'
        fundo.style.background = '#e4975a'
    }else {
        img.src = 'fotonoite.png'
        fundo.style.background = '#304040'
    }

}