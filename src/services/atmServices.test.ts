
import { calcularCedulas } from './atmServices';

describe('calcularCedulas', () => {
  test('Deve retornar a quantidade correta de cédulas para um valor válido', () => {
    const resultado = calcularCedulas(380);
    expect(resultado).toEqual({ 100: 3, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
  });

  test('Deve retornar cédulas mínimas para a soma dos valores das cédulas', () => {
    const resultado = calcularCedulas(187);
    expect(resultado).toEqual({ 100: 1, 50: 1, 20: 1, 10: 1, 5: 1, 2: 1 });
  });

  test('Deve retornar a quantidade correta de cédulas para um valor grande', () => {
    const resultado = calcularCedulas(1234);
    expect(resultado).toEqual({ 100: 12, 50: 0, 20: 1, 10: 1, 5: 0, 2: 2 });
  });

  test('Deve retornar cédulas mínimas para o valor exato de uma única cédula', () => {
    const resultado = calcularCedulas(50);
    expect(resultado).toEqual({ 100: 0, 50: 1, 20: 0, 10: 0, 5: 0, 2: 0 });
  });

  test('Deve retornar nenhuma cédula para o valor zero', () => {
    expect(() => calcularCedulas(0)).toThrow('Valor inválido. Insira um número inteiro positivo.');
  });

  test('Deve lançar erro para valores que não podem ser atendidos com as cédulas disponíveis', () => {
    expect(() => calcularCedulas(3)).toThrow('Valor não pode ser atendido com as cédulas disponíveis.');
  });

  test('Deve lançar erro para valores negativos', () => {
    expect(() => calcularCedulas(-100)).toThrow('Valor inválido. Insira um número inteiro positivo.');
  });

  test('Deve retornar cédulas mínimas para valores pequenos atendíveis', () => {
    const resultado = calcularCedulas(7);
    expect(resultado).toEqual({ 100: 0, 50: 0, 20: 0, 10: 0, 5: 1, 2: 1 });
  });

  test('Deve retornar a quantidade correta de cédulas para um valor muito grande', () => {
    const resultado = calcularCedulas(9879);
    expect(resultado).toEqual({
      100: 98,
      50: 1,
      20: 1,
      10: 0,
      5: 1,
      2: 2,
    });
  });

  test('Deve lançar erro para valores não inteiros', () => {
    expect(() => calcularCedulas(150.5)).toThrow('Valor inválido. Insira um número inteiro positivo.');
  });

  test('Deve retornar a quantidade mínima de cédulas quando o valor é múltiplo de uma única denominação', () => {
    const resultado = calcularCedulas(200);
    expect(resultado).toEqual({ 100: 2, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0 });
  });
});
