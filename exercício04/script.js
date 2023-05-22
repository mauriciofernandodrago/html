function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var idade = ano - fano.value
    var radraca = window.document.getElementsByName('radraca')
    if ( fano.value.length == 0 || fano.value > ano) {
        alert('verificar dados')
    }else if(!(radraca[0].checked) && !(radraca[1].checked)){
        alert('verificar dados')
        
    }else{
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        var res = window.document.getElementById('res')
        raca = ''
        if (radraca[0].checked){
            raca = 'Gato'
            if(idade < 5){
                img.setAttribute('src','gatofilhote.jpg')
            }else{
                img.setAttribute('src','gatoadulto.jpg')
            }
        }else{
            raca = 'Cachorro'
            if(idade< 5 ){
                img.setAttribute('src','cachorrofilhote.jpg')
            }else{
                img.setAttribute('src','cachorroadulto.jpg')
            }
        }
        res.innerHTML = `Detectado ${raca} com ${idade} anos`
        res.appendChild(img)
    }
}