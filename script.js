let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");

var textArea = document.getElementById("textArea")
var textArea2 = document.getElementById("encriptadoArea");






//Botón de encriptar
btnEncriptar.addEventListener('click',()=>{
    encriptar();
})


//Botón de desencriptar
btnDesencriptar.addEventListener('click',()=>{
    desencriptar();
})



//PRESIONANDO TECLA ENTER
textArea.addEventListener("keyup",function(e){
    
    if(e.key==='Enter' && !e.shiftKey){
        encriptar();
        textArea2.style.backgroundImage = "url('img/Muñeco.png')";
    }/* else {
        textArea2.style.backgroundImage = "url('img/Muñeco.png')";
    } */
})


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
        textArea2.style.backgroundImage = "url('img/Muñeco.png')";
    } 
    //textArea2.style.backgroundImage = "url('img/Muñeco.png')";
    

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
        textArea2.style.backgroundImage = "url('img/Muñeco.png')";
    }
}