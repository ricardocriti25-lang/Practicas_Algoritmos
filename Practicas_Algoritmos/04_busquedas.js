// Practica 4: Busqueda lineal y binaria
const calificaciones = [8, 5, 9, 6, 7];
const objetivo = 7;
function busquedaLineal(datos, valor) {
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] === valor) return i;
  }
  return -1;
}
function busquedaBinaria(datos, valor) {
  let izquierda = 0;
  let derecha = datos.length - 1;
  while (izquierda <= derecha) {
    const medio = Math.floor((izquierda + derecha) / 2);
    if (datos[medio] === valor) return medio;
    if (datos[medio] < valor) izquierda = medio + 1;
    else derecha = medio - 1;
  }
  return -1;
}
console.log('Lista original:', calificaciones);
console.log('Buscar:', objetivo);
console.log('Posicion lineal (inicia en 0):', busquedaLineal(calificaciones, objetivo));
const ordenadas = [...calificaciones].sort((a, b) => a - b);
console.log('Lista ordenada:', ordenadas);
console.log('Posicion binaria (inicia en 0):', busquedaBinaria(ordenadas, objetivo));
console.log('Complejidad lineal: O(n)');
console.log('Complejidad binaria: O(log n)');