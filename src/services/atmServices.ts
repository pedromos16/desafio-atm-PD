export const calcularCedulas = (valor: number): { [key: number]: number } => {
  const cedulas = [100, 50, 20, 10, 5, 2];

  if (!Number.isInteger(valor) || valor <= 0) {
    throw new Error('Valor inválido. Insira um número inteiro positivo.');
  }

  const minCedulas = Array(valor + 1).fill(Infinity);
  const ultimaCedula = Array(valor + 1).fill(-1);

  minCedulas[0] = 0;

  for (const cedula of cedulas) {
    for (let v = cedula; v <= valor; v++) {
      if (minCedulas[v - cedula] + 1 < minCedulas[v]) {
        minCedulas[v] = minCedulas[v - cedula] + 1;
        ultimaCedula[v] = cedula;
      }
    }
  }

  if (minCedulas[valor] === Infinity) {
    throw new Error('Valor não pode ser atendido com as cédulas disponíveis.');
  }

  const resultado: { [key: number]: number } = {};
  for (const cedula of cedulas) {
    resultado[cedula] = 0;
  }

  let restante = valor;
  while (restante > 0) {
    const cedula = ultimaCedula[restante];
    if (cedula === -1) {
      throw new Error('Erro ao calcular as cédulas.');
    }
    resultado[cedula]++;
    restante -= cedula;
  }

  return resultado;
};
