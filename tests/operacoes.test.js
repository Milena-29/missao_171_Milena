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

    test("Vefica se a nota é menor do que 0",() => {

        expect(verificarAprovacao(-2)).toBe("Nota inválida");

    });

    test("Vefica se a nota é maior do que 10",() => {

        expect(verificarAprovacao(11)).toBe("Nota inválida");
    });

    test("Verifica se a nota é válida para a aprovação",() => {

        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("Verifica se a nota é válida para a reprovação", () =>{

        expect(verificarAprovacao(6)).toBe( "Reprovado");
    });



});

// Questão 3

describe("Testes da Função validarCadastro()", () =>{

    test("Verificar se todos os dados são válidos", () =>{

        expect(validarCadastro()).toBe();
    });

    test("Verificar se todos os dados são inválidos", () =>{

        expect(validarCadastro()).toBe();
    }); 

    test("Verificar se o nome está vazio", () =>{

        expect(validarCadastro()).toBe();
    }); 

    test("Verificar se o nome contém apenas espaços", () =>{

        expect(validarCadastro()).toBe();
    }); 

    test("Verificar se a idade está vazia", () =>{

        expect(validarCadastro()).toBe();
    });

    test("Verificar se a idade está abaixo do limite permitido", () =>{

        expect(validarCadastro()).toBe();
    });

    test("Verificar se a idade está acima do limite permitido", () =>{

        expect(validarCadastro()).toBe();
    });

    test("Verificar se o e-mail está vazio", () =>{

        expect(validarCadastro()).toBe();
    });

    test("Verificar se o e-mail não contém o caractere @", () =>{

        expect(validarCadastro()).toBe();
    });




});

// Questão 4 

describe("Testes da Função calcularFrete()", () =>{
    test("")
    expect()



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
