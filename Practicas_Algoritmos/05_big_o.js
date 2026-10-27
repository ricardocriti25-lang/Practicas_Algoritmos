// Practica 5: Comparacion de crecimiento Big-O
// Son cantidades teoricas aproximadas de operaciones, no tiempos reales.
console.log('n | O(1) | O(log n) | O(n) | O(n log n) | O(n²)');
for (const n of [5, 10, 20, 50, 100]) {
  const log = Math.log2(n);
  console.log(`${n} | 1 | ${log.toFixed(2)} | ${n} | ${(n * log).toFixed(2)} | ${n * n}`);
}
console.log('Conclusión: O(n²) crece más rápido que O(n log n) cuando n aumenta.');