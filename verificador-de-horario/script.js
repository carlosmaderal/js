var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagen')
var msg2 = window.document.getElementById('msg2')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são <strong>${hora}h${minutos}min</strong>`

if (hora < 12){
    //bom dia
img.src ='imagens/manha.png'
document.body.style.background = '#85A1A4'
msg2.innerText = `Bom dia`
} else if (hora < 19) {
    //boa tarde
    img.src ='imagens/tarde.png'
    document.body.style.background = '#FEA300'
    msg2.innerText ='Boa tarde'
} else{
    //boa noite
    img.src ='imagens/noite.png'
    document.body.style.background = '#002B66'
    msg2.innerText = 'Boa noite'
}