const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Pacote testes", () => {
  test("Calcular cada Pacote", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });
});

//COmo tem que ficar
describe("Calcular pacote para cada projeto", () => {
  it("Retorna pacote básico caso o número total de horas seja até 50", () => {
    const totalHoraPorProjeto = 20;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_basico");
  });

  it("Retorna pacote básico caso o número total de horas seja 50", () => {
    const totalHoraPorProjeto = 50;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_basico");
  });

  it("Retorna pacote intermediário caso o número total de horas seja até 100", () => {
    const totalHoraPorProjeto = 99;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_intermediario");
  });

  it("Retorna pacote intermediário caso o número total de horas seja 100", () => {
    const totalHoraPorProjeto = 100;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_intermediario");
  });

  it("Retorna pacote premium caso o número total de horas seja até 200", () => {
    const totalHoraPorProjeto = 199;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_premium");
  });

  it("Retorna pacote premium caso o número total de horas seja 200", () => {
    const totalHoraPorProjeto = 200;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("pacote_premium");
  });

  it("Retorna que não há pacote disponível", () => {
    const totalHoraPorProjeto = 201;

    const result = calcularPacote(totalHoraPorProjeto);

    expect(result).toBe("Não há pacotes disponíveis");
  });
});

//outro exemplo

const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote de acordo com cada projeto", () => {
  test("Retorne pacote básico caso o número total de horas seja até 50", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Retorne pacote básico caso o número total de horas seja exatamente 50", () => {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Retorne pacote intermediário caso o número total de horas seja até 100", () => {
    const totalDeHorasPorProjeto = 99;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorne pacote intermediário caso o número total de horas seja exatamente 100", () => {
    const totalDeHorasPorProjeto = 100;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorne pacote_premium caso o número total de horas seja até 200", () => {
    const totalDeHorasPorProjeto = 199;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });

  test("Retorne pacote_premium caso o número total de horas seja exatamente 200", () => {
    const totalDeHorasPorProjeto = 200;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
