# Milena Lopes do Nascimento


# Questão 1 


## a) 

É criada a função nomeada de 'calcularDesconto', que recebe os parâmetros valor e percentual. Dentro dela é feita a verificação dos seguintes casos: se o valor é menor ou igual a 0, se o percentual é menor que 0 ou se o percentual é maior que 100.
Se alguma dessas hipóteses for verdadeira, a execução do código é interrompida e é lançada a mensagem de erro "Dados inválidos".
Caso todas essas condições sejam falsas, é calculado o desconto, isto é, desconto = valor * (percentual / 100). O desconto calculado é subtraído do valor original, e a função retorna o preço final do produto após a aplicação do desconto.

## b) 

Cenário 1 – Valor negativo:

    Entrada: valor = -50, percentual = 10.

    Saída: Erro "Dados inválidos", pois o valor não pode ser negativo.

Cenário 2 – Percentual menor que 0:

    Entrada: valor = 100, percentual = -10.

    Saída: Erro "Dados inválidos", pois o percentual não pode ser negativo.

Cenário 3 – Percentual maior que 100:

    Entrada: valor = 100, percentual = 102.

    Saída: Erro "Dados inválidos", pois o desconto não pode ultrapassar 100%.

## c) 

    describe("Testes da Função calcularDesconto()", () => {

        test("O valor ser negativo", () => {
            expect(() => calcularDesconto(-50, 10))
                .toThrow("Dados inválidos");
        });

        test("O percentual ser menor do que 0", () => {
            expect(() => calcularDesconto(100, -10))
                .toThrow("Dados inválidos");
        });

        test("O percentual ser maior do que 100", () => {
            expect(() => calcularDesconto(100, 102))
                .toThrow("Dados inválidos");
        });
    });

# Questão 2


## a) 

É criada a função nomeada de verificarAprovacao, que recebe o parâmetro nota. Dentro dela é feita a verificação dos seguintes casos: se a nota é menor que 0 ou se a nota é maior que 10.
Se alguma dessas hipóteses for verdadeira, a execução do código é interrompida e é lançada a mensagem de erro "Nota inválida".
Caso essas duas condições sejam falsas, é verificado se a nota é igual ou maior que 7. Caso seja, é retornado "Aprovado". Caso contrário, é retornado "Reprovado".

## b) 

Cenário 1 – Nota menor que 0:

    Entrada: nota = -2.

    Saída: Erro "Nota inválida", pois a nota não pode ser menor que zero.

Cenário 2 – Nota maior que 10:

    Entrada: nota = 11.

    Saída: Erro "Nota inválida", pois a nota não pode ultrapassar 10.

Cenário 3 – Nota válida (Aprovado):

    Entrada: nota = 8.

    Saída: "Aprovado", pois a nota é maior que 7.

Cenário 4 – Nota válida (Reprovado):

    Entrada: nota = 5.

    Saída: "Reprovado", pois a nota é menor que 7.

## c) 

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



## d) 

Testar apenas uma nota de aprovação não seria suficiente para verificar o comportamento da função, pois são feitas várias verificações. A primeira é para descobrir se a nota é válida, isto é, se está entre 0 e 10. Depois disso, é feita a verificação de aprovação, ou seja, se a nota é maior ou igual a 7, o aluno é aprovado. Caso contrário, se a nota for menor que 7 e maior ou igual a 0, o aluno é reprovado. Testar apenas uma vez poderia gerar erros no resultado. Por exemplo, testar apenas se a nota é maior ou igual a 7 não impediria a aprovação de notas maiores que 10, que são valores inválidos. Já testar somente se a nota está entre 0 e 10 poderia fazer a função aceitar uma nota 3 sem verificar corretamente se o aluno foi aprovado ou reprovado.

# QUESTÃO 3



## a) 

Para que o cadastro seja considerado válido, é necessário que o nome tenha sido preenchido e não contenha apenas espaços vazios, que a idade informada esteja entre 18 e 100 anos e que o e-mail tenha sido preenchido e contenha o caractere @.

## b) 

1. Todos os dados são válidos.

        test("Verificar se todos os dados são válidos", () =>{

            expect(validarCadastro("Bianca", 28, "profrafa001@gmail.com")).toBe(true);
        });

2. Todos os dados são inválidos

        test("Verificar se todos os dados são inválidos", () =>{

            expect(validarCadastro("  ", 15, "biancaCamposgmail.com")).toBe(false);
        });


3. O nome está vazio.

        test("Verificar se o nome está vazio", () =>{

            expect(validarCadastro("", 20, "biancaCampos@gmail.com")).toBe(false);
        });

4. O nome contém apenas espaços.

        test("Verificar se o nome contém apenas espaços", () =>{

            expect(validarCadastro("      ", 21, "biancaCampos@gmail.com")).toBe(false);
        }); 

5. A idade está vazia.

        test("Verificar se a idade está vazia", () =>{

            expect(validarCadastro("Bianca", 0, "profrafa001@gmail.com")).toBe(false);
        });

6. A idade está abaixo do limite permitido.

        test("Verificar se a idade está abaixo do limite permitido", () =>{

            expect(validarCadastro("Bianca", 12, "biancaCampos@gmail.com")).toBe(false);
        });

7. A idade está acima do limite permitido.

        test("Verificar se a idade está acima do limite permitido", () =>{

            expect(validarCadastro("Bianca", 102, "carlaRodrigues@gmail.com")).toBe(false);
        });

8. O e-mail está vazio.

        test("Verificar se o e-mail está vazio", () =>{

            expect(validarCadastro("Bianca", 25, "")).toBe(false);
        });

9. O e-mail não contém o caractere @.

        test("Verificar se o e-mail não contém o caractere @", () =>{

            expect(validarCadastro("Bianca", 35, "biancaCamposgmail.com")).toBe(false);
        });

## c) 

Se apenas um dos três dados informados for inválido, a função retorna false, mesmo que os outros dois estejam corretos. Isso acontece porque todos os dados precisam atender às condições estabelecidas para que o cadastro seja considerado válido.


# Questão 4 


## a) 

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

## b) 

O valor do frete é retornado como R$ 0,00, pois, caso o valor da compra seja de R$ 200,00 ou mais, o frete será grátis. Isso é determinado na função nessa parte:

     if (valorCompra >= 200) {
            return 0;
    }
    

Assim, acontece porque, nesse caso, o valor da compra é exatamente R$ 200,00. Dessa forma, o frete recebe o valor de R$ 0,00.

# Questão 5

## a) 

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

## b) 

Uma vez que a entrada é "25", ocorrerá um erro, pois as aspas ("") indicam que o tipo de dado é string, isto é, um dado de texto. Mesmo que dentro das aspas esteja um número, ele será tratado como texto, mas a função espera receber um número. Por isso, acontece o erro.


# Questão 6


## a) 

Testes unitários são testes realizados em pequenas partes de um sistema, como funções, para verificar se estão funcionando corretamente. Eles são importantes porque ajudam a encontrar erros, evitar problemas e garantir que o código apresente os resultados esperados.

## b) 

Teste A

    test("deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    }); 

O teste A passa, pois os valores da quantidade e do preço unitário são válidos: 3 e 10. O resultado é 30, que corresponde ao esperado, já que a função multiplica o preço unitário pela quantidade.

Teste B

    test("deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

O teste B passa, pois a quantidade é zero e o preço unitário é 10. Como a função permite quantidade igual a zero, o resultado da multiplicação é 0, que corresponde ao esperado.    

Teste C

    test("deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

O teste C passa, pois a quantidade é negativa (-2). A função identifica esse valor como inválido e lança o erro "Valores inválidos", exatamente como o teste espera.

Teste D

    test("deve calcular o total com preço negativo", () => {
        expect(calcularTotal(2, -5)).toBe(-10);
    });

O teste D falha, pois o preço unitário é negativo (-5). A função não aceita valores negativos e lança o erro "Valores inválidos". Porém, o teste espera que o resultado seja -10, o que não corresponde ao comportamento da função.

## c) 

O teste D apresenta uma expectativa incompatível com o comportamento da função, pois espera que a multiplicação de 2 por -5 retorne -10. Porém, a função foi programada para não aceitar valores negativos, tanto na quantidade quanto no preço unitário. Por isso, ela lança o erro "Valores inválidos" em vez de retornar um resultado. Ou seja, a execução da função é interrompida antes de realizar a conta final.


# Questão 7

## a) 

Teste A

    test("deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

O teste A passa, pois a senha possui exatamente 8 caracteres. Como a função aceita senhas com 8 caracteres ou mais, o resultado retornado é true, conforme o esperado.    

Teste B

    test("deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

O teste B passa, pois a senha possui apenas 6 caracteres. Como a função verifica se a senha possui menos de 8 caracteres, ela retorna false, conforme o esperado.    

Teste C

    test("deve rejeitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(false);
    });

O teste C falha, pois a senha possui 10 caracteres. Como a função aceita qualquer senha com 8 caracteres ou mais, ela retorna true. Porém, o teste espera false, causando a falha.

Teste D

    test("deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });

O teste D passa, pois a senha possui 12 caracteres. Como está dentro da condição aceita pela função, o resultado retornado é true, conforme o esperado.


## b) 

O problema do teste C é que ele espera que uma senha com 10 caracteres seja rejeitada, retornando false. Porém, a função foi programada para aceitar qualquer senha que tenha 8 caracteres ou mais. Por isso, ela retorna true, tornando a expectativa do teste incompatível com o comportamento da função. Ou seja, a lógica do teste está incorreta em relação à lógica implementada na função.


## c) 

Não. A função verifica somente a quantidade de caracteres da senha, aceitando qualquer senha que tenha 8 caracteres ou mais. Os caracteres que compõem a senha não são importantes para a função, pois ela não verifica a presença de letras maiúsculas, números ou caracteres especiais.

# Questão 8

## a)  

Teste A

    test("deve aprovar pedido quando há estoque suficiente", () => {
        expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });



Teste B

    test("deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

Teste C

    test("deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });


Teste D


    test("deve retornar estoque insuficiente para quantidade zero", () => {
        expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");
    });


Teste E

    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2))
            .toThrow("Quantidade inválida");
    });

## b) 


## c) 

# Questão 9

## a) 

    test("Teste 1", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test("Teste 2", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test("Teste 3", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });
    test("Teste 4", () => {
        expect(calcularMedia(-1, 8)).toBe(3.5);
    });

    test("Teste 5", () => {
        expect(calcularMedia(5, 15)).toBe(10);
    });


## b) 



