const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Quantas horas para terminar um projeto", () => {
  test("Dado um array com as funcionalidades, retorna a soma das horas necessária", () => {
    const funcionalidades = ["setup", "responsividade"];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(24);
  });
});
