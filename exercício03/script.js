function verificar(){
    var dat = new Date()
    ano = dat.getFullYear()
    fano = window.document.getElementById('txtano')
    idade = ano - fano.value
    var res = window.document.getElementById('res')
    if(idade >30 || idade <= 0){
        window.alert('você preencheu algo errado, tente novamente.')
    }else{
        var especie = window.document.getElementsByName('radraca')
        var raca = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (especie[1].checked){
            var raca = 'cachorro'
            if (idade < 5)
                img.setAttribute('src', 'cachorrofilhote.jpg')
            else{
                img.setAttribute('src', 'cachorroadulto.jpg')
            }
        }else if (especie[0].checked){
            var raca = 'gato'
            if (idade < 5 ){
                img.setAttribute('src','gatofilhote.jpg')
            }else{
                img.setAttribute('src', 'gatoadulto.jpg')
            }

        }
        res.innerHTML = `detectamos um ${raca} com ${idade} anos`
        res.appendChild(img)
    }
    

}