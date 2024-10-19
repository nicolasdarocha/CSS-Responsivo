# TODO

1. tornar responsivo(IN PROGRESS)
2. implementar a navbar lateralmente no desktop(IN PROGRESS)
3. ajustar a resoluções 1440+ (o menu lateral n fica colado na lateral)

## REGISTRO

- o projeto voltou pra antes de ter jeito a navbar
- tentei usar 'import url' como antes feito mas nao esta funcionando sla pq
- tava importando 'reset.css' por ultimo e jogando td a estilizacao pro lixo

- 14/10 - media queries criados
- tamanho do card ja responsivo(falta ajustar o conteudo)
- limitei main e header em 1440px
- section display alterado pra flex(grid n tava jogando os cards em linha sla pq)

- 16/10 - home com medidas responsivas
- cards já estão responsivos a res desktop
- agora na res desktop o conteudo fica centralizado
- tags iniciais da navbar já foram criadas

- 17/10 - navbar feita
- float button feito
- res entre 768-1440px agora tem o conteudo centralizado tambem

- 18/10(19/10) - navbar lateral para desktop(alpha)

### PENSANDO

- PENSANDO em mexer com media querie e a responsividade dos cards ANTES de
comecar a criar a navbar
- DEVO anotar oq muda no figma e setar os valores q variam nos respectivos
media queries(1 - 320, 2 - 768, 3 - 1440)
14/10
- flex tem o problema de ter gap msm com quebra de linha, testar grid com html
teste pra tentar resolver o problema de flow em linha(grid-flow n quebra-linha)
16/10
- pelo visto o problema do gap qnd quebra linha sumiu, se aparecer no 360px
eu jogo o gap pra 768 e deixo o default sem(ou algo assim)
- apagar os TODO q ja foram feitos ja q to anotando no registro
18/10-19/10
- arrumar um jeito de colar a barra na lateral sem descentralizar o container
- *IDEIA: position relative e right calculado pra colar na lateral

1. HOME(2-3)
avatar img 57 - 96
name font 22 - 31
consultas font 14 - 18

2. CARDS(2-3)
avatar 32 - 48
tamanho 328x170 - 400x17
btn endereço 296x48 - 368x48
btn video/audio 139x48 - 172x48
texto nome 14 - 18
texto horario 12 - 14
texto btn 14-16

3. ESPAÇAMENTOS
(tem q ver isso ai, posso usar gap e justify no geral se pá)
