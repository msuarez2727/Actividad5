/*$(document).mousemove(function(){
     $("body").css("cursor", "none")
     $(".mouse").css("top", event.clientY).css("left", event.clientX);
})*/





alert("Bienvenidos!");

//VARIABLE: Es un espacio en memoria donde podemos guardar informacion


var nombre="pedro perez";//stings, textos
var numeros= 123456;//Number, numero, float, decimales
var boleanos= true; //Boleanos
var arreglos=["paula","pedro", 23, 45, true] // Es una variable que guarda varios elementos
//un objeto de la vida real traido a la programacion, un conjunto de caracteristicas 
var objetos={
animal: "perro",
raza: "husky",
age: 3,
propietario: "Carlos Guzman"
}

function mensaje() { //Ejecuta un bloqueo de codigo
    var name= prompt("Ingresa el nombre de la biografia");// prompt me permite ingresar un dato
    alert("Bienvenid@"+ name);

}
