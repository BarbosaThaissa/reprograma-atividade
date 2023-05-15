const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });
  test("Retornar o valor total...", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);
  });
});

//COmo tem que ficar
const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor de Projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("Retorna valor total para um projeto de acordo com as funcionalidades", () => {
    const funcionalidades = ["setup"];

    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toBe(616);
  });
});

//outro exeplo
const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do Projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("retorna valor total para um projeto dadas as funcionalidade por projeto pedidas e o valor da hora da desenvolvedora", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);
  });
});
