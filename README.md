# Milena Lopes do Nascimento

# Questão 1 

## a) O que a função faz

É criada a função nomeada de ' calcularDesconto' ela obtém os parêmetros 'valor' e 'percentual'. Dentro é feito a veificação dos casos: se o valor é menor ou igual a 0, ou se o percentual é menor do que 0, ou se o percentual é maior do que 100. Se alguma dessas hipoteses for verdadeira, é interrompida a execução do código e é lançada a mensagem "Dados inválidos". Caso todas forem falses para aquelas condições, é calculado o desconto, isto é 'desconto = valor * (percentual/100)' e o desconto calculado é subtraído do 'valor', e a função retorna o preço final do produto após a aplicação do desconto.

## b) Cenários idealizados

Cenário 1 – Valor negativo:

    Entrada: valor = -50, percentual = 10.

    Saída: Erro "Dados inválidos", pois o valor não pode ser negativo.

Cenário 2 – Percentual menor que 0:

    Entrada: valor = 100, percentual = -10.

    Saída: Erro "Dados inválidos", pois o percentual não pode ser negativo.

Cenário 3 – Percentual maior que 100:

    Entrada: valor = 100, percentual = 102.

    Saída: Erro "Dados inválidos", pois o desconto não pode ultrapassar 100%.

## c) Testes unitários

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