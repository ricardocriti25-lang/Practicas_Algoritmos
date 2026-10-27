// Practica 3: QuickSort
const calificaciones = [8, 5, 9, 6, 7];
let comparaciones = 0;
function quickSort(datos) {
  if (datos.length <= 1) return datos;
  const pivote = datos[0];
  const menores = [];
  const mayores = [];
  for (let i = 1; i < datos.length; i++) {
    comparaciones++;
    if (datos[i] < pivote) menores.push(datos[i]);
    else mayores.push(datos[i]);
  }
  console.log('Pivote:', pivote, 'Menores:', menores, 'Mayores:', mayores);
  return [...quickSort(menores), pivote, ...quickSort(mayores)];
}
console.log('Original:', calificaciones);
console.log('Ordenado:', quickSort(calificaciones));
console.log('Comparaciones:', comparaciones);
console.log('Complejidad promedio: O(n log n), peor caso: O(n²)');