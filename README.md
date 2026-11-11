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



## d) 

Testar apenas uma nota de aprovação não seria suficiente para verificar o comportamento da função, pois são feitas várias verificações. A primeira é para descobrir se a nota é válida, isto é, se está entre 0 e 10. Depois disso, é feita a verificação de aprovação, ou seja, se a nota é maior ou igual a 7, o aluno é aprovado. Caso contrário, se a nota for menor que 7 e maior ou igual a 0, o aluno é reprovado. Testar apenas uma vez poderia gerar erros no resultado. Por exemplo, testar apenas se a nota é maior ou igual a 7 não impediria a aprovação de notas maiores que 10, que são valores inválidos. Já testar somente se a nota está entre 0 e 10 poderia fazer a função aceitar uma nota 3 sem verificar corretamente se o aluno foi aprovado ou reprovado.

# QUESTÃO 3



## a) 

Para que o cadastro seja considerado válido, é necessário que o nome tenha sido preenchido e não contenha apenas espaços vazios, que a idade informada esteja entre 18 e 100 anos e que o e-mail tenha sido preenchido e contenha o caractere @.

## b) 

1. Todos os dados são válidos.

2. Todos os dados são inválidos

3. O nome está vazio.

4. O nome contém apenas 
espaços.

5. A idade está vazia.

6. A idade está abaixo do limite permitido.

7. A idade está acima do limite permitido.

8. O e-mail está vazio.

9. O e-mail não contém o caractere @.

## c) 

# Questão 4 


## a) 

## b) 

O valor do frete é retornado como R$ 0,00, pois, caso o valor da compra seja de R$ 200,00 ou mais, o frete será grátis. Isso é determinado na função nessa parte:

     if (valorCompra >= 200) {
            return 0;
    }
    

Assim, acontece porque, nesse caso, o valor da compra é exatamente R$ 200,00. Dessa forma, o frete recebe o valor de R$ 0,00.

# Questão 5

## a) 

## b) 

Uma vez que a entrada é "25", ocorrerá um erro, pois as aspas ("") indicam que o tipo de dado é string, isto é, um dado de texto. Mesmo que dentro das aspas esteja um número, ele será tratado como texto, mas a função espera receber um número. Por isso, acontece o erro.


# Questão 6


## a) 

## b) 

Teste A

    test("deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    }); 

Teste B

    test("deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

Teste C

    test("deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

Teste D

    test("deve calcular o total com preço negativo", () => {
        expect(calcularTotal(2, -5)).toBe(-10);
    });

## c) 


# Questão 7

## a) 

Teste A

    test("deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

Teste B

    test("deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

Teste C

    test("deve rejeitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(false);
    });

Teste D

    test("deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });


## b) 






## c) 


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



