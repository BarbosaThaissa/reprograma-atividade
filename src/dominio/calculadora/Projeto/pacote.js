const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value > totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;


// //SERA?
// const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

// const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
//   .find(([key, value]) => value > totalDeHorasPorProjeto
// )[0];
// const calcularPacote = (totalDeHorasPorProjeto) => {
//   for (const [pacote, limite] of Object.entries(MAX_HORAS_POR_PACOTE)) {
//     if (totalDeHorasPorProjeto <= limite) {
//       return pacote;
//     }
//   }
//   return 'Não há pacotes disponíveis'
// }

