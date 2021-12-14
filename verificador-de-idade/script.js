function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        
        window.alert(`Erro`)

    
    } else{
        var radio = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixaetaria = ''

        var img = document.createElement('img')
        img.setAttribute('src', 'foto')

        if (radio[0].checked) {
            genero = 'homem'
            
             if (idade < 10) {
                faixaetaria = 'criança'
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 18 ) {
                faixaetaria = 'adolecente'
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60){
                faixaetaria = 'adulto'
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                faixaetaria = 'idoso'
                img.setAttribute('src', 'imagens/idoso-m.png')
            } 
        }else if (radio[1].checked){
            genero = 'mulher'
           
            if (idade < 10) {
                faixaetaria = 'criança'
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 18 ) {
                faixaetaria = 'adolecente'
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60){
                faixaetaria = 'adulta'
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                faixaetaria = 'idosa'
                img.setAttribute('src', 'imagens/idoso-f.png')
            } 
        }         
        
        res.innerHTML = `Detectamos ${genero} ${faixaetaria} com ${idade} Anos`
        res.appendChild(img) 
       


    }
}