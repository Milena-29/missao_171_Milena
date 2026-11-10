// Importação de Módulo
const { calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit, calcularTotal, validarSenha, verificarEstoque, calcularMedia} = require("../src/operacoes.js");

// Questão 1 

describe("Testes da Função calcularDesconto()", () =>{

    test("O valor ser negativo", () =>{
        expect(calcularDesconto(-50, 10)).toBe("Dados inválidos");

    });

    test("O percentual ser menos do que 0", () =>{
        expect(calcularDesconto(10,-10)).toBe("Dados inválidos");

    });

    test("O percentual ser maior do que 100", () => {
        expect(calcularDesconto(5, 102)).toBe("Dados inválidos");

    });


});

// Questão 2 

describe("Testes da Função verificarAprovacao()", () => {

    test( "",() => {


    });

    test( "",() => {


    });

    test( "",() => {


    });



});

// Questão 3

describe("", () =>{



});

// Questão 4 

describe("", () =>{



});

// Questão 5 

describe("", () =>{



});

// Questão 6 

describe("", () =>{



});

// Questão 7

describe("", () =>{



});

// Questão 8 

describe("", () =>{



});

// Questão 9 

describe("", () =>{



});