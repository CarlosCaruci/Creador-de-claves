let botonCrear = document.querySelector('.ButtonCrar');
let mostrarResult = document.querySelector('.claveCreada');
let largo = document.querySelector('.longitud');
let letrasNum = document.querySelector('.LtrNum');
let letrasSing = document.querySelector('.LtrSing');
let letrasMayus = document.querySelector('.LtrMayus');
let letrasMinus = document.querySelector('.LtrMinus');
let numeros = "1234567890";
let signos = "!@#$%&*-_|?/.+=<>\~"
let mayusculas = "QWERTYUIOPASDFGHJKLZXCVBNM"
let minusculas = "qwertyuiopasdfghjklzxcvbnm"
let result;

botonCrear.addEventListener('click', ()=>{
    result=''
    mostrarResult.value=''
    
        if (letrasNum.checked == true) {result+=numeros}
        if (letrasSing.checked == true) {result+=signos}
        if (letrasMayus.checked == true) {result+=mayusculas}
        if (letrasMinus.checked == true) {result+=minusculas}
    

        for (let index = 0; index < largo.value; index++) {
            
        numeroRamdon = Math.floor(Math.random()*result.length)
        mostrarResult.value += result.charAt(numeroRamdon)
            
        }
}) 


document.querySelector(".copiarresultado").addEventListener('click', ()=>{
    
    mostrarResult.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    
    document.querySelector('.textoCopy').innerHTML = "¡Copiado!"

    setTimeout(()=> document.querySelector('.textoCopy').innerHTML = "Copiar", 4000)})