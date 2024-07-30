import {Knex} from 'knex'
exports.seed = async function (knex:Knex) {
    await knex('question').insert([
        {
            "text": "Ana comprou 3 pacotes de balas. Cada pacote contém 15 balas. Quantas balas ela tem no total?",
            "alternatives": JSON.stringify({
                "a": "45",
                "b": "40",
                "c": "50",
                "d": "55",
                "e": "60"
            }),
            "answer": "a",
            "level": 1
        },
        {
            "text": "João tem 5 maçãs e dá 2 para sua amiga. Quantas maçãs João tem agora?",
            "alternatives": JSON.stringify({
                "a": "3",
                "b": "2",
                "c": "5",
                "d": "4",
                "e": "6"
            }),
            "answer": "a",
            "level": 1
        },
        {
            "text": "Se você tiver 12 canetas e perder 4, quantas canetas restam com você?",
            "alternatives": JSON.stringify({
                "a": "8",
                "b": "6",
                "c": "7",
                "d": "5",
                "e": "9"
            }),
            "answer": "a",
            "level": 1
        },
        {
            "text": "Pedro compra 2 livros que custam R$20 cada. Quanto ele gasta no total?",
            "alternatives": JSON.stringify({
                "a": "R$30",
                "b": "R$40",
                "c": "R$50",
                "d": "R$60",
                "e": "R$70"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Você tem 6 chocolates e divide igualmente entre 3 amigos. Quantos chocolates cada amigo recebe?",
            "alternatives": JSON.stringify({
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Ana tem 20 reais e compra um livro que custa 12 reais. Quantos reais ela tem agora?",
            "alternatives": JSON.stringify({
                "a": "8",
                "b": "10",
                "c": "12",
                "d": "15",
                "e": "18"
            }),
            "answer": "a",
            "level": 1
        },
        {
            "text": "Em uma sala com 10 alunos, 3 são meninas. Qual a fração de meninos na sala?",
            "alternatives": JSON.stringify({
                "a": "3/10",
                "b": "7/10",
                "c": "3/7",
                "d": "7/3",
                "e": "1/3"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Um carro percorre 60 km em 1 hora. Qual a velocidade média do carro?",
            "alternatives": JSON.stringify({
                "a": "50 km/h",
                "b": "60 km/h",
                "c": "70 km/h",
                "d": "80 km/h",
                "e": "90 km/h"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Você compra 3 camisetas a R$25 cada. Qual é o valor total da compra?",
            "alternatives": JSON.stringify({
                "a": "R$50",
                "b": "R$75",
                "c": "R$80",
                "d": "R$85",
                "e": "R$90"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Se um livro custa R$35 e você paga com uma nota de R$50, quanto você receberá de troco?",
            "alternatives": JSON.stringify({
                "a": "R$10",
                "b": "R$15",
                "c": "R$20",
                "d": "R$25",
                "e": "R$30"
            }),
            "answer": "b",
            "level": 1
        },
        {
            "text": "Um pacote de bolachas custa R$7. Se você compra 4 pacotes, quanto você gastou?",
            "alternatives": JSON.stringify({
                "a": "R$21",
                "b": "R$24",
                "c": "R$25",
                "d": "R$28",
                "e": "R$30"
            }),
            "answer": "a",
            "level": 1
        },
        {
            "text": "João tem uma coleção com 48 figurinhas e quer dividir igualmente entre 6 álbuns. Quantas figurinhas ele coloca em cada álbum?",
            "alternatives": JSON.stringify({
                "a": "6",
                "b": "7",
                "c": "8",
                "d": "9",
                "e": "10"
            }),
            "answer": "c",
            "level": 2
        },
        {
            "text": "Em uma festa, há 40 convidados e 8 deles são crianças. Qual a porcentagem de crianças na festa?",
            "alternatives": JSON.stringify({
                "a": "20%",
                "b": "25%",
                "c": "30%",
                "d": "35%",
                "e": "40%"
            }),
            "answer": "b",
            "level": 2
        },
        {
            "text": "Se um carro percorre 150 km com 10 litros de gasolina, qual é o consumo médio do carro em km/l?",
            "alternatives": JSON.stringify({
                "a": "10 km/l",
                "b": "12 km/l",
                "c": "15 km/l",
                "d": "20 km/l",
                "e": "25 km/l"
            }),
            "answer": "a",
            "level": 2
        },
        {
            "text": "Você tem 120 reais e deseja comprar livros que custam 25 reais cada. Quantos livros você pode comprar?",
            "alternatives": JSON.stringify({
                "a": "4",
                "b": "5",
                "c": "6",
                "d": "7",
                "e": "8"
            }),
            "answer": "b",
            "level": 2
        },
        {
            "text": "Uma receita pede 200 gramas de açúcar. Se você usar 150 gramas, qual é a fração de açúcar utilizada em relação à receita original?",
            "alternatives": JSON.stringify({
                "a": "3/4",
                "b": "2/3",
                "c": "1/2",
                "d": "1/3",
                "e": "4/5"
            }),
            "answer": "a",
            "level": 2
        },
        {
            "text": "Você comprou um item com 20% de desconto. Se o preço original era R$80, quanto você pagou com o desconto?",
            "alternatives": JSON.stringify({
                "a": "R$64",
                "b": "R$68",
                "c": "R$72",
                "d": "R$76",
                "e": "R$80"
            }),
            "answer": "a",
            "level": 2
        },
        {
            "text": "Um ônibus transportou 120 passageiros ao longo do dia. Se 1/3 dos passageiros desceram antes do meio-dia, quantos passageiros desceram?",
            "alternatives": JSON.stringify({
                "a": "30",
                "b": "40",
                "c": "50",
                "d": "60",
                "e": "70"
            }),
            "answer": "b",
            "level": 2
        },
        {
            "text": "Se uma loja oferece um desconto de R$15 em um produto que custa R$100, qual é o preço final do produto?",
            "alternatives": JSON.stringify({
                "a": "R$85",
                "b": "R$90",
                "c": "R$95",
                "d": "R$100",
                "e": "R$105"
            }),
            "answer": "a",
            "level": 2
        },
        {
            "text": "Em uma corrida, Ana correu 7 km em 45 minutos. Qual é a velocidade média dela em km/h?",
            "alternatives": JSON.stringify({
                "a": "8 km/h",
                "b": "9 km/h",
                "c": "10 km/h",
                "d": "11 km/h",
                "e": "12 km/h"
            }),
            "answer": "b",
            "level": 2
        },
        {
            "text": "Você tem uma caixa com 48 lápis e dá 1/4 para seus amigos. Quantos lápis você deu?",
            "alternatives": JSON.stringify({
                "a": "12",
                "b": "10",
                "c": "14",
                "d": "15",
                "e": "16"
            }),
            "answer": "a",
            "level": 2
        },
        {
            "text": "Uma piscina tem a forma de um retângulo com 25 metros de comprimento e 10 metros de largura. Qual é a área da piscina?",
            "alternatives": JSON.stringify({
                "a": "200 m²",
                "b": "225 m²",
                "c": "250 m²",
                "d": "275 m²",
                "e": "300 m²"
            }),
            "answer": "c",
            "level": 3
        },
        {
            "text": "Você tem uma caixa com 120 bolas. Se você divide as bolas em 8 caixas igualmente, quantas bolas há em cada caixa?",
            "alternatives": JSON.stringify({
                "a": "12",
                "b": "14",
                "c": "15",
                "d": "16",
                "e": "18"
            }),
            "answer": "a",
            "level": 3
        },
        {
            "text": "Em um clube, 3/4 dos membros são adultos e o restante são crianças. Se há 80 adultos, quantas crianças há no clube?",
            "alternatives": JSON.stringify({
                "a": "20",
                "b": "25",
                "c": "30",
                "d": "40",
                "e": "60"
            }),
            "answer": "d",
            "level": 3
        },
        {
            "text": "Uma empresa vende um produto por R$150. Se ela oferece um desconto de 15%, qual é o preço final do produto?",
            "alternatives": JSON.stringify({
                "a": "R$127,50",
                "b": "R$130,00",
                "c": "R$135,00",
                "d": "R$140,00",
                "e": "R$145,00"
            }),
            "answer": "a",
            "level": 3
        },
        {
            "text": "Se um retângulo tem uma largura de 8 cm e uma área de 96 cm², qual é o comprimento do retângulo?",
            "alternatives": JSON.stringify({
                "a": "10 cm",
                "b": "12 cm",
                "c": "14 cm",
                "d": "15 cm",
                "e": "16 cm"
            }),
            "answer": "b",
            "level": 3
        },
        {
            "text": "Em uma pesquisa, 60% dos entrevistados preferem café e o restante prefere chá. Se 240 pessoas preferem café, qual é o número total de entrevistados?",
            "alternatives": JSON.stringify({
                "a": "300",
                "b": "350",
                "c": "400",
                "d": "420",
                "e": "450"
            }),
            "answer": "c",
            "level": 3
        },
        {
            "text": "Um jardineiro plantou 240 flores em 12 canteiros. Quantas flores ele plantou em cada canteiro?",
            "alternatives": JSON.stringify({
                "a": "18",
                "b": "20",
                "c": "22",
                "d": "24",
                "e": "26"
            }),
            "answer": "d",
            "level": 3
        },
        {
            "text": "Você tem uma receita que usa 3/5 de um litro de leite. Se você tem 2 litros de leite, quanto leite sobra após usar a quantidade da receita?",
            "alternatives": JSON.stringify({
                "a": "1 litro",
                "b": "1,2 litros",
                "c": "1,5 litros",
                "d": "1,8 litros",
                "e": "2 litros"
            }),
            "answer": "a",
            "level": 3
        },
        {
            "text": "Uma caixa de sapatos custa R$90 e está com um desconto de 20%. Qual é o valor do desconto?",
            "alternatives": JSON.stringify({
                "a": "R$15",
                "b": "R$18",
                "c": "R$20",
                "d": "R$22",
                "e": "R$25"
            }),
            "answer": "b",
            "level": 3
        },
        {
            "text": "Você precisa comprar 5 metros de tecido para fazer uma cortina. Se o tecido custa R$20 por metro, quanto você gastará no total?",
            "alternatives": JSON.stringify({
                "a": "R$80",
                "b": "R$85",
                "c": "R$90",
                "d": "R$95",
                "e": "R$100"
            }),
            "answer": "a",
            "level": 3
        },
        {
            "text": "Uma loja tem uma promoção de 30% de desconto em todos os produtos. Se um produto custa R$250 antes do desconto, qual será o preço final após o desconto?",
            "alternatives": JSON.stringify({
                "a": "R$175",
                "b": "R$175,50",
                "c": "R$180",
                "d": "R$185",
                "e": "R$190"
            }),
            "answer": "a",
            "level": 4
        },
        {
            "text": "Se você investe R$1.000 em uma conta que rende 5% ao ano, quanto dinheiro você terá após 3 anos, assumindo que os juros são compostos?",
            "alternatives": JSON.stringify({
                "a": "R$1.157,63",
                "b": "R$1.150,00",
                "c": "R$1.160,00",
                "d": "R$1.162,50",
                "e": "R$1.165,00"
            }),
            "answer": "a",
            "level": 4
        },
        {
            "text": "Uma fábrica produz 500 unidades de um produto por dia. Se a produção aumenta em 10% a cada mês, qual é a produção após 3 meses, assumindo um crescimento composto?",
            "alternatives": JSON.stringify({
                "a": "665 unidades",
                "b": "750 unidades",
                "c": "726 unidades",
                "d": "820 unidades",
                "e": "915 unidades"
            }),
            "answer": "c",
            "level": 4
        },
        {
            "text": "Um retângulo tem um perímetro de 50 cm e uma largura de 12 cm. Qual é o comprimento do retângulo?",
            "alternatives": JSON.stringify({
                "a": "13 cm",
                "b": "14 cm",
                "c": "15 cm",
                "d": "16 cm",
                "e": "17 cm"
            }),
            "answer": "c",
            "level": 4
        },
        {
            "text": "Uma empresa oferece um bônus de 10% para cada venda realizada acima de R$500. Se um vendedor fez uma venda de R$800, qual será o bônus dele?",
            "alternatives": JSON.stringify({
                "a": "R$30",
                "b": "R$40",
                "c": "R$50",
                "d": "R$60",
                "e": "R$70"
            }),
            "answer": "d",
            "level": 4
        },
        {
            "text": "Um carro viaja a uma velocidade constante de 80 km/h. Qual é o tempo necessário para percorrer 240 km?",
            "alternatives": JSON.stringify({
                "a": "2 horas",
                "b": "2,5 horas",
                "c": "3 horas",
                "d": "3,5 horas",
                "e": "4 horas"
            }),
            "answer": "c",
            "level": 4
        },
        {
            "text": "Em um salão de festas, há 40 mesas, e cada mesa pode acomodar 6 pessoas. Se há 220 convidados, quantas mesas estão completamente ocupadas?",
            "alternatives": JSON.stringify({
                "a": "36",
                "b": "37",
                "c": "38",
                "d": "39",
                "e": "40"
            }),
            "answer": "b",
            "level": 4
        },
        {
            "text": "Se a taxa de inflação anual é de 4% e um produto custa R$500, qual será o custo do produto após 1 ano, assumindo que os preços aumentam de acordo com a inflação?",
            "alternatives": JSON.stringify({
                "a": "R$520",
                "b": "R$525",
                "c": "R$530",
                "d": "R$540",
                "e": "R$550"
            }),
            "answer": "a",
            "level": 4
        },
        {
            "text": "Uma piscina retangular tem 12 metros de comprimento e 8 metros de largura. Se a profundidade média é de 1,5 metros, qual é o volume da piscina em metros cúbicos?",
            "alternatives": JSON.stringify({
                "a": "120 m³",
                "b": "144 m³",
                "c": "150 m³",
                "d": "160 m³",
                "e": "180 m³"
            }),
            "answer": "b",
            "level": 4
        },
        {
            "text": "Você tem 15 diferentes livros e deseja colocá-los em 3 prateleiras de maneira que cada prateleira tenha a mesma quantidade de livros. Quantas diferentes maneiras você pode distribuir os livros nas prateleiras?",
            "alternatives": JSON.stringify({
                "a": "35",
                "b": "70",
                "c": "105",
                "d": "140",
                "e": "210"
            }),
            "answer": "c",
            "level": 4
        },
        {
            "text": "Você investiu R$500 em um fundo que rende 8% ao ano. Qual é o valor do investimento após 5 anos, considerando juros compostos?",
            "alternatives": JSON.stringify({
                "a": "R$734,66",
                "b": "R$740,00",
                "c": "R$750,00",
                "d": "R$764,00",
                "e": "R$780,00"
            }),
            "answer": "a",
            "level": 4
        },
        {
            "text": "Um trabalhador ganha R$3.000 por mês e recebe um aumento de 5% ao ano. Qual será seu salário após 2 anos, assumindo que o aumento é composto?",
            "alternatives": JSON.stringify({
                "a": "R$3.307,50",
                "b": "R$3.315,00",
                "c": "R$3.330,00",
                "d": "R$3.345,00",
                "e": "R$3.360,00"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Você tem um triângulo com um ângulo de 60 graus e outro ângulo de 45 graus. Qual é a medida do terceiro ângulo do triângulo?",
            "alternatives": JSON.stringify({
                "a": "75 graus",
                "b": "80 graus",
                "c": "85 graus",
                "d": "90 graus",
                "e": "95 graus"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Se um círculo tem um raio de 7 cm, qual é a área do círculo? (Use π ≈ 3,14)",
            "alternatives": JSON.stringify({
                "a": "153,86 cm²",
                "b": "154 cm²",
                "c": "150 cm²",
                "d": "160 cm²",
                "e": "170 cm²"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Você está planejando uma viagem e estima que precisará de 500 litros de combustível. Se o preço do litro do combustível é R$6, qual será o custo total da viagem?",
            "alternatives": JSON.stringify({
                "a": "R$2.800",
                "b": "R$3.000",
                "c": "R$3.200",
                "d": "R$3.500",
                "e": "R$3.800"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Uma fábrica produz 10.000 peças por mês e a produção aumenta em 5% a cada mês. Quantas peças serão produzidas após 6 meses, assumindo crescimento composto?",
            "alternatives": JSON.stringify({
                "a": "13.382 peças",
                "b": "13.600 peças",
                "c": "14.000 peças",
                "d": "14.500 peças",
                "e": "15.000 peças"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Você tem uma planilha com 12 colunas e 20 linhas. Qual é o total de células na planilha?",
            "alternatives": JSON.stringify({
                "a": "240",
                "b": "260",
                "c": "280",
                "d": "300",
                "e": "320"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Um investidor comprou ações por R$50.000 e vendeu por R$60.000. Qual foi a porcentagem de lucro?",
            "alternatives": JSON.stringify({
                "a": "15%",
                "b": "20%",
                "c": "25%",
                "d": "30%",
                "e": "35%"
            }),
            "answer": "b",
            "level": 5
        },
        {
            "text": "Se a soma de três números é 90 e dois desses números são 25 e 30, qual é o terceiro número?",
            "alternatives": JSON.stringify({
                "a": "35",
                "b": "40",
                "c": "45",
                "d": "50",
                "e": "55"
            }),
            "answer": "b",
            "level": 5
        },
        {
            "text": "Em uma sequência aritmética, o primeiro termo é 5 e a razão é 3. Qual é o 10º termo da sequência?",
            "alternatives": JSON.stringify({
                "a": "32",
                "b": "35",
                "c": "38",
                "d": "41",
                "e": "44"
            }),
            "answer": "b",
            "level": 5
        },
        {
            "text": "Se você lançar um dado, qual é a probabilidade de sair um número ímpar?",
            "alternatives": JSON.stringify({
                "a": "1/2",
                "b": "1/3",
                "c": "1/4",
                "d": "1/5",
                "e": "1/6"
            }),
            "answer": "a",
            "level": 5
        },
        {
            "text": "Você está planejando comprar um carro que custa R$40.000. Se você paga 20% de entrada e financia o restante em 12 parcelas sem juros, qual será o valor de cada parcela?",
            "alternatives": JSON.stringify({
                "a": "R$3.333,33",
                "b": "R$3.500,00",
                "c": "R$3.666,67",
                "d": "R$3.750,00",
                "e": "R$3.833,33"
            }),
            "answer": "a",
            "level": 5
        }
    ]);
}
