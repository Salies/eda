# Análise exploratória de dados

# Introdução

(explica o que é o jogo, como funciona, etc.)

explicar o que é GC

- lista de abreviações: CS, CSGO, GC, ADR...

# Análise qualitativa dos dados

(explicar o dataset)

basicamente dizer que não conseguimos fazer métricas por time, ou vítória de time,
mesmo sendo um jogo de time, porque os dados são por player

- falar que uma amostragem aleatória de players, cuja população é todos os players da GC

- para simplificar, falar que cada linha é uma partida de um player

# Trabalho em si

## Análise descritiva

dataset de players:
- players
- distribuição de idade

dataset de lobby:
- distribuição de nível
- mapas mais jogados (tentar justificar a esolha dos jogadores)


## Análise de dados

-- explicar o que o nível da GC e porque ele vai ser a medida mais importante

[essas porra tudo abaixo faz média, melhor]
[colocar correlação em tudo que der - lembrar na hora de analisar que correlação não é causalidade]
- clutch por nível (hipótese: nível mais alto é mais difícil fazer clutch)
- mapa por nível (tentar tirar uma conclusão -- mapas mais antigos, mapas que requerem mais tática, mapas que PC de pobre não roda..)
- KPR por nível (deve ser equilibrado, mas justificar)
- DPR por nível (mesmo de cima)
- utilitário por mapa (falar que mapas com mais utilitários tendem a ser mais táticos, etc. -- hipótese: inf muito mais que d2)
- HS por nível
- survived por nível

- nível médio
- moda de nível
- boxplot de nível (tem mediana, só pra dizer que a gente usou, e os quartis [bem lembrado Voltera!!!])
- variância e desvio padrão de nível

análise da variância e desvio padrão só de nível já tá bom pq senão o trabalho vira giga



unidades para usar com as medidas estatísticas:
- KPR
- DPR
- HS
- Flash assist
- Survived
- Uso de utilitário

## Índices: rating 2.0

para trabalhar com índices, como foi dado em sala, o grupo julgou interessante incluir....

julgamos válido este exemplo do rating 2.0, pois...

.. um índice muito respeitado [citar fontes] competitivamente é o Rating 2.0 
da HTLV [https://www.hltv.org/news/20695/introducing-rating-20]

a fórmula é privada, porém foram conduzidos estudos de regressão com os dados da HLTV para aferir o índice
[https://flashed.gg/posts/reverse-engineering-hltv-rating/]

cita o estudo do cara que descobriu a fórmula

FODA-SE, copia o que o cara fez: regressão para 2.0, regressão pro Impact

com isso feito, testa a fórmula obtida com os dados de um player da base da GC

# Conclusão

...


----

amostragem e distribuição OK

média
moda
mediana
quartis e percentis
variância
desvio padrão
coeficiente de variação (foda-se)
assimetria / curtose -> dá pra fazer com as distribuições
regressão
correlação