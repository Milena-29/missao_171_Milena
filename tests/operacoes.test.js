// Importação de Módulo
const { calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit, calcularTotal, validarSenha, verificarEstoque, calcularMedia} = require("../src/operacoes.js");

// Questão 1 

describe("Testes da Função calcularDesconto()", () => {

    test("O valor ser negativo", () => {
        expect(() => calcularDesconto(-50, 10))
            .toThrow("Dados inválidos");
    });

    test("O percentual ser menor do que 0", () => {
        expect(() => calcularDesconto(10, -10))
            .toThrow("Dados inválidos");
    });

    test("O percentual ser maior do que 100", () => {
        expect(() => calcularDesconto(5, 102))
            .toThrow("Dados inválidos");
    });

});

// Questão 2 

describe("Testes da Função verificarAprovacao()", () => {

    test("Verifica se a nota é menor do que 0", () => {
        expect(() => verificarAprovacao(-2))
            .toThrow("Nota inválida");
    });

    test("Verifica se a nota é maior do que 10", () => {
        expect(() => verificarAprovacao(11))
            .toThrow("Nota inválida");
    });

    test("Verifica se a nota é válida para aprovação", () => {
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("Verifica se a nota é válida para reprovação", () => {
        expect(verificarAprovacao(6)).toBe("Reprovado");
    });

});

// Questão 3

describe("Testes da Função validarCadastro()", () =>{

    test("Verificar se todos os dados são válidos", () =>{

        expect(validarCadastro("Bianca", 28, "profrafa001@gmail.com")).toBe(true);
    });

    test("Verificar se todos os dados são inválidos", () =>{

        expect(validarCadastro("  ", 15, "biancaCamposgmail.com")).toBe(false);
    }); 

    test("Verificar se o nome está vazio", () =>{

        expect(validarCadastro("", 20, "biancaCampos@gmail.com")).toBe(false);
    }); 

    test("Verificar se o nome contém apenas espaços", () =>{

        expect(validarCadastro("      ", 21, "biancaCampos@gmail.com")).toBe(false);
    }); 

    test("Verificar se a idade está vazia", () =>{

        expect(validarCadastro("Bianca", 0, "profrafa001@gmail.com")).toBe(false);
    });

    test("Verificar se a idade está abaixo do limite permitido", () =>{

        expect(validarCadastro("Bianca", 12, "biancaCampos@gmail.com")).toBe(false);
    });

    test("Verificar se a idade está acima do limite permitido", () =>{

        expect(validarCadastro("Bianca", 102, "carlaRodrigues@gmail.com")).toBe(false);
    });

    test("Verificar se o e-mail está vazio", () =>{

        expect(validarCadastro("Bianca", 25, "")).toBe(false);
    });

    test("Verificar se o e-mail não contém o caractere @", () =>{

        expect(validarCadastro("Bianca", 35, "biancaCamposgmail.com")).toBe(false);
    });




});


// Questão 4

describe("Testes da Função calcularFrete()", () => {

    test("Caso 1: valor da compra é 250 e a distância é 10 e resultado esperado é 0", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test("Caso 2: valor da compra é 100 e a distância é 10 e resultado esperado é 20", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test("Caso 3: valor da compra é 200 e a distância é 5 e resultado esperado é 0", () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    test("Caso 4: valor da compra é 0 e a distância é 10 e resultado esperado é 20", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test("Caso 5: valor da compra é -50 e a distância é 10 e resultado esperado é erro", () => {
        expect(() => calcularFrete(-50, 10)).toThrow("Valores inválidos");
    });

    test("Caso 6: valor da compra é 100 e a distância é -5 e resultado esperado é erro", () => {
        expect(() => calcularFrete(100, -5)).toThrow("Valores inválidos");
    });

});


// Questão 5

describe("Testes da Função converterCelsiusParaFahrenheit()", () => {

    test("Caso 1: a entrada é 0°C e o resultado esperado é 32", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("Caso 2: a entrada é 100°C e o resultado esperado é 212", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("Caso 3: a entrada é -40°C e o resultado esperado é -40", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("Caso 4: a entrada é 25°C e o resultado esperado é 77", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test("Caso 5: a entrada é '25' e o resultado esperado é um erro", () => {
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    test("Caso 6: a entrada é 'abc' e o resultado esperado é um erro", () => {
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });

});

// Questão 6

describe("Testes da Função calcularTotal()", () => {

    test("Teste A: deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    test("Teste B: deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    test("Teste C: deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

    test("Teste D: deve calcular o total com preço negativo", () => {
        expect(calcularTotal(2, -5)).toBe(-10);
    });

});

// Questão 7

describe("Testes da Função validarSenha()", () => {

    test("Teste A: deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

    test("Teste B: deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

    test("Teste C: deve rejeitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(false);
    });

    test("Teste D: deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });

});

// Questão 8 

describe("", () =>{



});

// Questão 9 

describe("", () =>{



});
