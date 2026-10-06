const { sumArray, countWords, findMax, isDivisible } = require('../functions');

describe('Pruebas para sumArray', () => {
  test('debe retornar la suma de un arreglo de números positivos', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test('debe retornar la suma de un arreglo de números negativos', () => {
    expect(sumArray([-1, -2, -3, -4])).toBe(-10);
  });

  test('debe retornar 0 con un arreglo vacío', () => {
    expect(sumArray([])).toBe(0);
  });

  test('debe calcular correctamente con un arreglo que incluye 0', () => {
    expect(sumArray([0, 5, 10, 0])).toBe(15);
  });
});

describe('Pruebas para countWords', () => {
  test('debe contar las palabras de una cadena de texto normal', () => {
    expect(countWords('Hola mundo esto es una prueba')).toBe(6);
  });

  test('debe contar correctamente ignorando espacios al inicio y al final', () => {
    expect(countWords('  Hola mundo  ')).toBe(2);
  });

  test('debe retornar 0 con una cadena vacía', () => {
    expect(countWords('')).toBe(0);
  });

  test('debe manejar múltiples espacios consecutivos entre palabras', () => {
    expect(countWords('Hola    mundo   con   espacios')).toBe(4);
  });
});

describe('Pruebas para findMax', () => {
  test('debe encontrar el número máximo en un arreglo de positivos', () => {
    expect(findMax([5, 2, 9, 3])).toBe(9);
  });

  test('debe encontrar el número máximo en un arreglo de negativos', () => {
    expect(findMax([-5, -2, -9, -3])).toBe(-2);
  });

  test('debe retornar null con un arreglo vacío', () => {
    expect(findMax([])).toBeNull();
  });

  test('debe retornar el número cuando todos los elementos son iguales', () => {
    expect(findMax([7, 7, 7, 7])).toBe(7);
  });
});

describe('Pruebas para isDivisible', () => {
  test('debe retornar true con números divisibles', () => {
    expect(isDivisible(10, 2)).toBe(true);
  });

  test('debe retornar false con números no divisibles', () => {
    expect(isDivisible(10, 3)).toBe(false);
  });

  test('debe retornar mensaje de error si el divisor es 0', () => {
    expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
  });

  test('debe funcionar correctamente con números negativos', () => {
    expect(isDivisible(-10, 2)).toBe(true);
    expect(isDivisible(10, -3)).toBe(false);
  });
});