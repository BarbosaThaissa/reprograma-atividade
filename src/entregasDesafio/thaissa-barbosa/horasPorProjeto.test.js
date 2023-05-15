const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Horas para terminar um projeto", () => {
  test("Dado um array com as funcionalidades, retorna a soma das horas necessária", () => {
    const funcionalidades = ["setup", "responsividade"];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(24);
  });
});

//COmo tem que ficar

const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais para finalizar um projeto", () => {
  it("Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias", () => {
    const funcionalidades = ["formulario", "responsividade"];

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toBe(32);
  });
});
