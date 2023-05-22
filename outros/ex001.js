var idade = 99
if (idade < 16 ){
    console.log('não vota')
}else if (idade <18 || (idade >65 && idade<100)){
    console.log('voto opcional')
}else if (idade >= 100 && idade >65 ){
    console.log('você é muito velhor pra que se preocupa ainda?')
}else { 
    console.log('voto obrigatório')
}
