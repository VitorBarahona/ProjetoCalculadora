function adicionarCaracter(caracter){
    const valorClicado = document.querySelector('.display').value
document.querySelector('.display').value = valorClicado + caracter

}

function limparTela() {
    document.querySelector('.display').value = ''
}

function calcular() {
    const valorClicado = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorClicado)
}

function inverter(){
    const valorClicado =document.querySelector('.display').value
    document.querySelector('.display').value = valorClicado * -1
}