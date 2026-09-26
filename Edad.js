respuesta=3;
let edad = Number(respuesta);
let clasificacion;
if (edad < 0) {
  clasificacion = "Error";
} else if (edad < 3) {
  clasificacion = "Baby";
} else if (edad < 11) {
  clasificacion = "Child";
} else if (edad < 18) {
  clasificacion = "Teenager";
} else if (edad < 60) {
  clasificacion = "Adult";
} else {
  clasificacion = "Senior";
}
console.log("Resultado:", clasificacion);