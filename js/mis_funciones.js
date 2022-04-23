//boton 1
function saludar() {
    var padre = document.getElementById("hola2");
    var input = document.createElement("INPUT");
    input.type = 'text';
    padre.appendChild(input);
}
// cambio de color Li
function dentro(objeto) {
    var ola = document.getElementsByTagName("li");
    ola[objeto.id].style.color = "red"

}

function fuera(objeto) {
    var juan = document.getElementsByTagName("li");
    juan[objeto.id].style.color = "black"

}
//boton 2
function validar(){
        suma=0
    var numero= document.getElementsByTagName("input");
    for (var i=0  ; i < (numero.length);i++){
        var letra=''
        var comparacion= parseInt(numero[i].value);
        letra=isNaN(comparacion)

        if (letra==false) { 
            suma=suma +(comparacion)
            
        }  
        if(letra==true){
             alert("Esto NO es un numero,ingresa un numero en la cuadro de texto "+(i+1))
        }      
        }
        var pedro=document.getElementById("div")
        var total=("el total de la suma es:"+suma)
        pedro.innerHTML=pedro.innerHTML+total
}
function cambiocolor(ancho,alto,boton) {
    var numero1=Math.random() * (255 - 0) + 0;
    var numero2=Math.random() * (255 - 0) + 0;
    var numero3=Math.random() * (255 - 0) + 0;
    boton.style.background = "RGB("+numero1+","+numero2+","+numero3+")";
    boton.style.width = alto;
    boton.style.height = ancho
    var imagen=document.getElementById("imagen")
    var sec = document.getElementById("sec_1")
    if(boton.innerHTML=="Para ganar dinero Click Aqui!!"){
        boton.innerHTML="Tr0lleado"
        imagen.src="media/maxresdefault.jpg"
    }
    else if(boton.innerHTML=="Tr0lleado"){
        boton.innerHTML="Para ganar dinero Click Aqui!!"
        imagen.src="media/hqdefault.jpg"
    }


}