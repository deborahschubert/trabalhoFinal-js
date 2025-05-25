
// Retorna o nome do pet em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Retorna true se o pet pode ser adotado
export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

// Calcula o consumo diário de ração
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Define atividade com base no porte
export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'caminhada no parque',
    grande: 'corrida ao ar livre'
  };
  return atividades[porte.toLowerCase()];
}

// Simula busca assíncrona de dado
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100); // atraso de 100ms
  });
}
