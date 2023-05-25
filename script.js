let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btncopiar = document.getElementById("copy");

var textArea = document.getElementById("textArea")
var textArea2 = document.getElementById("encriptadoArea");
var aviso = document.getElementById("aviso");



//-------------------------------------FUNCIONES------------------------------------------

//FUNCIÓN ENCRIPTAR 
function encriptar(){
    let textCapturado = textArea.value.toLowerCase();
    var textoEncriptado = textCapturado.replace(/e/igm,"enter")
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes")
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai")
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober")
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat")

    textArea2.value = textoEncriptado;
    textArea.value = "";
    if(textArea2.value != ""){
        textArea2.style.backgroundImage = "none";
    }else{
        textArea2.style.backgroundImage = "url('img/buscar.png')";
    } 
}

//FUNCIÓN DESENCRIPTAR 
function desencriptar(){
    let textCapturado = textArea.value.toLowerCase();
    var textoEncriptado = textCapturado.replace(/enter/igm,"e")
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i")
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a")
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o")
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u")

    textArea2.value = textoEncriptado;
    textArea.value="";
    if(textArea2.value != ""){
        textArea2.style.backgroundImage = "none";
    }else{
        textArea2.style.backgroundImage = "url('img/buscar.png')";
    }
}

//FUNCIÓN COPIAR
function copiar(){
    textArea2.select();
    document.execCommand("copy");
    textArea2.value = ""; 
}


//FUNCIÓN DETECTAR MAYUSCULAS(solo se usó como prueba)


/* function detectMayus(valor){

    prueba.innerHTML = valor;
    if(prueba.value === prueba.value.toUpperCase()){
        console.log("texto con mayuscula")
    } 
} esto va en el textArea1 onkeyup="detectMayus(this.value)"*/


//------------------EVENTOS------------------------------------------

//Botón de encriptar
btnEncriptar.addEventListener('click',()=>{
    encriptar();
})


//Botón de desencriptar
btnDesencriptar.addEventListener('click',()=>{
    desencriptar();
})


//Botón copiar -- le paso la función copiar
btncopiar.addEventListener('click',copiar);


//función presionando tecla enter para encriptar
function teclaEnter(e){
    if(e.key==='Enter' && !e.shiftKey){
        encriptar();
    }
}
//evento presionando tecla enter
textArea.addEventListener("keyup",teclaEnter);

//EVENTO PARA DETECTAR MAYÚSCULAS Y NÚMEROS

textArea.addEventListener('input', function(){
    var tex = textArea.value;

    if(/[A-Z]/.test(tex)|| /[0-9]/.test(tex)){
        textArea.classList.add("uppercase");
        setTimeout(function(){
            textArea.classList.remove("uppercase");
        },500);

        aviso.classList.add("aviso");
        setTimeout(function(){
            aviso.classList.remove("aviso");
        },500);

    }    
});
