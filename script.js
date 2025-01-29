
  
  function iniciarWhatsApp() {
            const numero = "5581982840782"; // Substitua pelo número correto
            const mensagem = encodeURIComponent("Olá! Tenho interesse em saber mais sobre os seus produtos.");
            const link = `https://wa.me/${numero}?text=${mensagem}`;
            window.open(link, "_blank"); // Abre o link em uma nova aba
        }


        const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/app.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Arquivos em cache.");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
// Seleciona os elementos pelo ID
const botao = document.getElementById('meuBotao');
const div = document.getElementById('minhaDiv');
const incopativel = document.getElementById('incopativel');
const dicas = document.getElementById('dicas')
const tinta = document.getElementById('tinta')
const protegido = document.getElementById('protegido')
// Adiciona um evento de clique ao botão "meuBotao"
botao.addEventListener('click', () => {
  // Altera o conteúdo da div com o texto do problema de cartucho
  div.innerHTML = `
    <h1>Impressora não reconhece o cartucho</h1><br>
    <h6>Problema no cartucho</h6>
    <p>
      Se a sua impressora não reconhece o cartucho, deve estar acontecendo uma falta de comunicação entre a impressora e o cartucho. 
      verifique se alguma luz do painel da impressora esta piscando se estiver piscando isso demostra que o cartucho ou a impressora esta com problema de leitura do cartucho.<br>
      existe duas luz a do colorido e a do preto se a impressora estiver piscando a luz do lado direito esta com problema no preto e se estiver piscando a luz do lado esquerdo esta com problema no colorido.
      As duas devem estar sem piscar acesas ou apagados isso demostra que esta tudo ok e você pode imprimir normal.
      <br>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSWCusd_2iTqYmcJJuyDqTlmagk6Rj0rn_A&s" ></img><br>
      
      Caso esteja piscando, verifique se é o preto ou o colorido retire o cartucho da máquina e, com um pedaço de papel higiênico, passe nos contatos do cartucho (as bolinhas douradas que têm atrás dos cartucho). 
      Passe suavemente de baixo para cima, tomando cuidado para não arrancar o flat do cartucho, pois se arrancar possivelmente ele irá parar de funcionar.
      <h2>Porquê passar o papel higiênico ?</h2>
      <p>Para entendermos temos que saber que os cartuchos de impressões são sensiveis a qualquer coisa no ambiente externo, até mesmo poeira ou gordura pode fazer com que a comunicação com a impressora seja interrompida.
      Com esse tipo de limpeza pode tirar a poeira ou até se encostar o dedo pode fazer a impressora não reconhecer o cartucho.</p>
    </p>
    <p>
      Coloque de volta e veja se funcionou. Caso não funcione, leve em um técnico mais próximo para ele fazer uma limpeza nesse cartucho 
      e, posteriormente, realizar testes, pois o cartucho pode estar desgastado ou queimado.
    </p>

    <h4>Dê uma olhada nas dicas de uso para sanar suas dúvidas<h4>
      `;
      
});

// Adiciona um evento de clique ao botão "incopativel"
incopativel.addEventListener('click', () => {
  // Altera o conteúdo da div com o texto do cartucho incompatível
  div.innerHTML = `
    <h1>Cartucho incompatível</h1>
    <img src="https://s2-techtudo.glbimg.com/05dZpSmrD-OikHnU5vM7W5ttvZc=/0x0:695x297/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/P/j/oWkoyjTfeibOEMvYqOiA/2014-03-20-erro-impressora.jpg" width="100%";></img>
    <p>
      Verifique os números do cartucho, veja se a sua impressora é compativel com esse modelo de cartucho.<br> 
      <img src="identificar.jpg"></img><br>
      Certifique-se de que os números do cartucho sejam compatíveis com sua impressora e sua região.<br>
      Abra a porta ou a tampa na área de acesso aos cartuchos. Antes de continuar, aguarde até que o carro pare de se mover.
      Verifique as etiquetas dos cartuchos e compare com a lista de cartuchos compatíveis com sua impressora em 
      <a href="https://support.hp.com" target="_blank">Quais cartuchos funcionam com minha impressora HP?</a>.
    </p>
  
    <p>
      Caso tenha visto o erro após mudar sua impressora de um país/região para outro, talvez você não encontre cartuchos com o número adquirido anteriormente. 
      Pode ser necessário entrar em contato com o Suporte HP para redefinir a regionalização.
    </p>
    <p>Se nenhuma acima corresponde é possivel que o cartucho esteja queimado ou cansado leve em alguma assistência para que possa lhe ajudar para identificar o problema.</p>
    <p>Dê uma olhada em outros topicos para ficar atualizado sobre cartuchos.</p>
   
      `;

         
});
dicas.addEventListener('click',()=>{
  div.innerHTML = `
  <h2>Como os cartuchos Funcionam</h2>
  <p>  Os castuchos são semelhantes ao chuveiro eletrico. Precisamos dobrar a atenção para não deixa-los secar 100%. </p><h6>Entenda</h6>
  <p> Seus condutores aquecem e resfriam simultaneamente pela própria tinta. E, não havendo mais tinta, queimará os resistores. Portanto, assim que apresentar falhas na impressão pare imediatamente,não insista!</p>
  
  <p>Os chineses são muito inferiores aos concorrentes, por que são fabricados com materiais de baixa qualidade. Por isso, devemos evitar o "SUPERAQUECIMENTO" porque ele provoca alterações nos valores dos resistores elétricos. Este é o motivo das impressoras recusarem os cartuchos que estão abaixo do "PADRÃO ÔHMICO"</p>

  <h2>Sugestões para um bom desempenho</h2>
  1- Não imprima no modo rascunho rápido (econômico).<br>
  2- Aa cada 5 impressões faça uma pequena pausa.<br>
  3- As oscilações da energia elétrica prejudicam os circuitos dos cartuchos.Por isso, só ligue a impressora no estabiliczador nunca diretamente na rede.
  4- Vários clientes perderam o cartucho por ter caido no chão no chão, visto que, "ESTAVAM SEM O CLIP DE PROTEÇÃO". Portanto, é imprescindivel colocá-lo a fim de evitar danos ao mesmo.<br>
  5- Cartuchos entopem por falta de uso. Faça uma almofadinha de papel higiênico e emudeça com água mineral por 30 minutos. Repita a operação anterior. Se a tinta não chegar traga para ser colocado na ultrasson.<br>
  6- Se a impressora não reconhece os cartuchos. Passe um papel macio (LIMPO) nos contatos elétricos - qualquer tipo de gordura isola a comunicação da impressora com os cartuchos. Portanto, não toque nos circuito elétrico dos cartuchos.<br>
  Todas essas recomendações são muito importantes para vida útil dos cartuchos e se obter impressão de boa qualidade.<br>
  <h6>Boa sorte - Master Cartuchos</h6>
  `
});
tinta.addEventListener('click',()=>{
  div.innerHTML = `
  <h2>Nivel das tintas</h2>
  <p>A impressora guarda na memória o nivel das tintas e quantas páginas há imprimir, isso somente com o cartucho "ORIGINAL".
  <br>
  Ela subtrai e mostra quanto tem de tinta quando zera ela entende que a tinta acabou.<br>
  Ao reciclar, o nivel não volta mais sempre aparecerá que o cartucho esta VAZIO.
    </p>
    `
});

protegido.addEventListener('click',()=>{
  div.innerHTML = `
 
<h1>Cartucho protegido</h2>
<p>Quando o cartucho esta protegido, ele só funciona na impressora que o protegeu,se você colocou o seu cartucho em uma impressora que estava com a função de proteger os cartuchos ativada esse cartucho só funciona nessa unica impressora.<br> Se colocar em outra impressora que mesmo seja compativel com o cartucho a impressora não irá aceitar pois foi protegido pela a outra impressora.</p>

<img src="https://i.ytimg.com/vi/Jont3RuEScU/sddefault.jpg" width="100%"></img>
<br><br>
<h3>Desative essa função</h3>
<p>1º – Faça duplo clic no Icon da Impressora HP instalada.</p> 
<img src="https://www.smartprinter.pt/wp-content/uploads/2020/01/Art6_Imagem_2.jpg" width="100%"></img>

<br><br>
<p>2º – Vai abrir o Assistente de Impressão HP do modelo instalado (no exemplo HP Deskjet 2600).</p> 

<img src="https://www.smartprinter.pt/wp-content/uploads/2020/01/Art6_Imagem_3.jpg" width="100%">
<br<br>

<p>3º – Se optou por clicar nos níveis de tinta, deverá selecionar o separador “PROTEÇÃO DE CARTUCHO HP” conforme imagem abaixo.</p> 

<img src="https://www.smartprinter.pt/wp-content/uploads/2020/01/Art6_Imagem_4.jpg
" width="100%">

<br><br>
4º – Se optou por clicar em “DESATIVAR PROTEÇÃO DE CARTUCHO HP”, siga as etapas abaixo indicadas.

<img src="https://www.smartprinter.pt/wp-content/uploads/2020/01/Art6_Imagem_5.jpg
" width="100%">
<p>Selecione “Desativar Proteção de Cartucho HP”</p>

<p>Depois em salvar Configuração</p>

<h6>Atenção os cartuchos que já foram protegidos não serão desprotegidos.<br>
essa alteração só funcionará para cartuchos novos que nunca foram instalados na impressora, serve apenas para os cartuchos futuros não serem protegidos.
</h6>





    `
});
