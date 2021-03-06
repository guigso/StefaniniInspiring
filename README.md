# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: async serve para carregar o script e executa-lo juntamente com o carregamento do conteudo da pagina enquanto o defer carrega o script junto com a página e executa-o apenas após finalizar o carregamento completo da página. Utilizando os dois numa mesma tag faz com que os navegadores que suportam utilizem o método async enquanto os mais antigos que ainda não tem essa funcionalidade utilizam o método do defer.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: O parâmetro callback serve para que a aplicação espere o término da execução de uma função antes de chamar a outra, nesse caso ele espera o carregamento completo da api do google maps para que ele possa chamar a função que inicializa o mapa.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: A api do maps não é completamente carregada para que possa ser inicializado o mapa. 1- Em nenhum outro momento chamamos a função do initMap. 2-Como a api não foi completamente carregada pode ocorrer problemas no tempo de execução, Exemplo: a aplicação executar a inicialização antes de obter todas informações da api.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Para funcionar sem o callback devemos retirar o async e o defer do import da api para que o conteúdo seja carregado antes de carregar o conteúdo da página, é necessário também adicionar um eventListener no index.js para quando o conteúdo da página for carregado ele chamar a função do initmap.
Linhas de cógido utilizadas:
index.html:<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyArZ9sCp-_eyhopItaVib_r5nrmwgP-d_c"></script>
index.js: google.maps.event.addDomListener(window, 'load', initMap);


### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: <link rel="manifest" href="manifest.json"> serve para carregar uma série de informações a respeito da aplicação como por exemplo:nome,autor,descrição e icones.
  <meta name="theme-color" content=""> serve pra definir uma cor para o tema no navegador do mobile.
  <meta name="apple-mobile-web-app-capable" content="yes"> serve para a aplicação rodar em full-screen em dispositivos da apple.
  <meta name="apple-mobile-web-app-status-bar-style" content="black"> serve para trocar a cor da barra de status em dispositivos da apple.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não totalmente, ainda falta algumas funções como a de responder caso o usuário esteja off-line e os services workers.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: Ele é utilizado para realizar funções assim que o componente é Inicializado. 
ngOnChange = Serve para Executar funções quando algum valor de property-binding é atualizado
ngDoCheck = Serve para Executar funções a cada ciclo de verificação de mudanças
ngAfterContentInit = É Executado após inserir conteúdo externo no view
ngAfterContentChecked =É Executado após verificação do conteúdo inserido
ngAfterViewInit = Executado após conteúdo na view for carregado
ngAfterViewChecked = Executado a cada verificação de conteúdo 
ngOnDestroy =	Executado quando o componente é destruido.


### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web components ajudam na hora de fazer uma determinada função, seja ela funções html,css, ou javascript,  que será repetida diversas vezes em um projeto. Web Components evitam de toda vez que você for fazer um elemento de um framework que você gosta, você precisaria copiar grande partes de código HTML, CSS e JS. Ao ter todos esses códigos separados muitas vezes acaba acarretando em algum problema entre os códigos, gerando retrabalho e outros problemas. A biblioteca gráfica do ionic tem uma série tags que já carregam um pré estilo para o conteúdo da página evitando que você precise fazer todas as declarações de estilo toda vez que for utiliza-lo, podendo editar somente o que você precisa.

### c) Para que serve a tag ngFor do angular?
R: ngFor serve para iterar uma coleçao de dados diretamente na view do component. Qualquer mudança que ocorra nos dados é automaticamente atualizada pelo ngFor.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: A declaração de um array que receberá conteúdo string, inicializando com conteúdo vazio

### e) Como funciona a api Events do Ionic? Para que serve?
R: A api events do ionic disponibiliza funções que podemos utilizar para observar a mudança dos dados determinados, o events.publisher que propaga a mudança para as funçoes que estiverem escutando utilizando o events.subscribe. Ela serve para que possa trocar conteúdo entre páginas diferentes  

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: Flexbox é uma parte do css que permite organizar o conteúdo da página de forma que o layout consiga ser visualizado em diversos tamanhos de tela e em diversos dispositivos. as tags já têm estilos pré definidos que auxiliam na hora de criar a página responsiva
<ion-grid> Define um container para todas rows e columns. 
<ion-row> Define um grupo de linha horizontal que pode haver diversas colunas dentro.
<ion-col> Todo conteúdo dentro de um grid deve ficar na tag ion-col. As columns de uma row se adaptam para preencher a row.  
Ao utilizar elas não precisamos recriar todo o estilo do inicio, podemos utiliza-las e altera-las quando for necessário.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: import na home.page.ts com nome errado 
    Função dimissLoading não instanciada na hora de chama-la
    remoção da 'função public on init' que estava sendo printada no console

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:1- O import incorreto estava fazendo que a aplicação não fosse compilada.
  2- A função de retirar o loading da tela não estava funcionando por tanto a aplicação travava no loading e o usuário não seria capaz de utiliza-la
  3- Remoção do log no console para que o usuário final não veja.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: Primeiro a aplicação tem que estar compilando normalmente para que possa ser testada antes de apresenta-la ao usuário nesse caso o problema foi apenas um erro de digitação. Após ser executada corretamente a funcionalidade da aplicação estava comprometida por conta de uma função sendo chamada de forma errada onde acabava não realizando o finalização da animação de "Carregando...".

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: Uma função async retorna uma promise que representa um valor que pode estar disponível agora, no futuro ou nunca. Juntamente com o await essa função está esperando o resultado da criação do controle de loading para que ele retorne a janela de loading ao usuário. O Await garante que essa promisse será resolvida para poder retomar a execução da função.

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: Ao utilizar o async/await temos certeza de que o função await foi executada antes de terminar a função async, garantindo que a promise foi resolvida de forma enxuta, sem uso de callbacks ou catch.