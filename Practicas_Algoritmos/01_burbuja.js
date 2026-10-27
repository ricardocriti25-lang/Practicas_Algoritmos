// Practica 1: Ordenamiento Burbuja
const calificaciones = [8, 5, 9, 6, 7];
console.log('Original:', calificaciones);
let comparaciones = 0;
for (let i = 0; i < calificaciones.length - 1; i++) {
  for (let j = 0; j < calificaciones.length - 1 - i; j++) {
    comparaciones++;
    if (calificaciones[j] > calificaciones[j + 1]) {
      const aux = calificaciones[j];
      calificaciones[j] = calificaciones[j + 1];
      calificaciones[j + 1] = aux;
    }
  }
  console.log('Pasada', i + 1, ':', [...calificaciones]);
}
console.log('Ordenado:', calificaciones);
console.log('Comparaciones:', comparaciones);
console.log('Complejidad: O(n²)');