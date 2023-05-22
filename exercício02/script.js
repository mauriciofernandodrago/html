function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'garoto.png')
            }else if(idade < 60){
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
            
        }else {(fsex[1].checked)
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menina.png')
                
            }else if(idade < 21){
                img.setAttribute('src', 'garota.png')
                
            }else if(idade < 60){
                img.setAttribute('src', 'mulher.png')
                
            }else{
                img.setAttribute('src', 'idosa.png')
                
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}