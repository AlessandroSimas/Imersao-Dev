var carta1 = {
    nome: "Pikachu",
    imagem: "https://c.tenor.com/9V0FV_h3JmoAAAAC/electro-ball-pikachu.gif",
    atributos: {
      ataque: 55,
      defesa: 40,
      velocidade: 90
    }
  };
  
  var carta2 = {
    nome: "Bulbassauro",
    imagem:
      "https://pa1.narvii.com/6229/a8a904da2f2a51f4ae4607088be65193bbbd4ec8_hq.gif",
    atributos: {
      ataque: 49,
      defesa: 49,
      velocidade: 45
    }
  };
  
  var carta3 = {
    nome: "Charmander",
    imagem: "https://i.gifer.com/REL3.gif",
    atributos: {
      ataque: 52,
      defesa: 43,
      velocidade: 65
    }
  };
  
  var carta4 = {
    nome: "Gengar",
    imagem:
      "https://i.pinimg.com/originals/78/93/2b/78932b012bd04b6fa7d976ba00da07af.gif",
    atributos: {
      ataque: 65,
      defesa: 80,
      velocidade: 130
    }
  };
  
  var carta5 = {
    nome: "Gyarados",
    imagem: "https://optclean.com.br/wp-content/uploads/2017/01/raw-1.gif",
    atributos: {
      ataque: 125,
      defesa: 79,
      velocidade: 81
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartas[numeroCartaJogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'> Você Venceu</p>";
      
    } else if (
      cartaMaquina.atributos[atributoSelecionado] >
      cartaJogador.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você Perdeu</p>";
      
    } else {
      
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    document.getElementById("btnNova").disabled = false;
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function nova(){
      history.go(0);
  }