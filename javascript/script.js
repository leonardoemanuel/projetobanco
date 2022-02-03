/*saldo,saque e deposito*/
let saldo=0
let textosaldo=document.getElementById('saldo')
let valor=document.getElementById('valordigitado')
let historico=document.getElementById('historico')


/*data,hora e minuto*/
let day= new Date()
let dia=day.getDate()
let mouth= new Date()
let mes=mouth.getMonth()
let year= new Date()
let ano=year.getFullYear()

function adicionar(){
    let valoradicionado=Number(valor.value)
    if(valor.value.length==0){

    }else{
        saldo=saldo+valoradicionado
        textosaldo.innerText=`Saldo R$: ${saldo}`
        historico.innerHTML+=`<p style="color:green;">Voce adicionou R$:${valoradicionado} no dia ${dia}/${mes+1}/${ano}</p>`
        valor.value=""
        valor.focus()
    }
}

function retirar(){
    let valorsub=Number(valor.value)
    if(valorsub>saldo){
        alert("Saldo Insuficiente !")
    } else if(valor.value.length==0){

    }
    else{
        saldo=saldo-valorsub
        textosaldo.innerText=`Saldo R$: ${saldo}`
        historico.innerHTML+=`<p style="color:red;">Voce Retirou R$:${valorsub} no dia ${dia}/${mes+1}/${ano}</p>`
        valor.value=""
        valor.focus()

    }
}
function mostrarHistorico(){
    if(botaohistorico.value=="Ocultar Histórico"){
        botaohistorico.value="Mostrar Histórico"
        historico.style.display="none"
    }else{
        let botaohistorico=document.getElementById('botaohistorico')
        botaohistorico.value="Ocultar Histórico"
        historico.style.display="block"
    }
    
}

function avançar(){
    let nome=document.getElementById('nomeCompleto')
    let idade=document.getElementById('idade')
    let endereço=document.getElementById('endereço')
    let nconta=document.getElementById('numeroConta')
    let dadospessoais=document.getElementById('dados')
    if(nome.value.length==0 || idade.value.length==0 ||endereço.value.length==0 || nconta.value.length==0){
        alert("Preencha todos os campos corretamente !")
    }else{
        let sectionInformaçoes=document.getElementById('informaçoesPessoais')
        let sectionbancaria=document.getElementById('contabancaria')
        sectionInformaçoes.style.display="none"
        sectionbancaria.style.display="block"
        dadospessoais.innerHTML=`<p>Nome:${nome.value.toUpperCase()}</p><p>Idade:${idade.value}</p><p>Endereço:${endereço.value.toUpperCase()}</p><p>Conta:${nconta.value}</p>`
    }
}