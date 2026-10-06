// Suma de elementos en un arreglo
function sumArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Conteo de palabras en una cadena
function countWords(text) {
  if (!text || typeof text !== 'string') return 0;
  const trimmedText = text.trim();
  if (trimmedText === '') return 0;
  return trimmedText.split(/\s+/).length;
}

// Encontrar el número máximo en un arreglo
function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  return Math.max(...numbers);
}

// Verificar si un número es divisible entre otro
function isDivisible(num, divisor) {
  if (divisor === 0) return "No se puede dividir entre cero";
  return num % divisor === 0;
}

module.exports = {
  sumArray,
  countWords,
  findMax,
  isDivisible
};