// Practica 2: Ordenamiento por Insercion
const calificaciones = [8, 5, 9, 6, 7];
console.log('Original:', calificaciones);
let comparaciones = 0;
for (let i = 1; i < calificaciones.length; i++) {
  const actual = calificaciones[i];
  let j = i - 1;
  while (j >= 0) {
    comparaciones++;
    if (calificaciones[j] <= actual) break;
    calificaciones[j + 1] = calificaciones[j];
    j--;
  }
  calificaciones[j + 1] = actual;
  console.log('Pasada', i, ':', [...calificaciones]);
}
console.log('Ordenado:', calificaciones);
console.log('Comparaciones:', comparaciones);
console.log('Complejidad promedio: O(n²), mejor caso: O(n)');