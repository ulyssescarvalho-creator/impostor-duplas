const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");

const botaoNovoJogo =
    document.getElementById("novoJogo");

const nomeJogador = document.getElementById("nomeJogador");

const botaoMostrar = document.getElementById("mostrarPalavra");
const palavraSecreta = document.getElementById("palavraSecreta");

const tipoJogador = document.getElementById("tipoJogador");
const palavraJogador = document.getElementById("palavraJogador");

const botaoEsconder = document.getElementById("esconderPalavra");

const listaJogadores = document.getElementById("listaJogadores");

const botaoAdicionar = document.getElementById("adicionarJogador");

const tituloJogadores =
    document.getElementById("tituloJogadores");

const avisoJogadores =
    document.getElementById("avisoJogadores");

const categorias = [

    { palavra1: "Pizza", palavra2: "Hambúrguer", dica: "Fast-food" },
    { palavra1: "Cachorro", palavra2: "Gato", dica: "Animais de estimação" },
    { palavra1: "Praia", palavra2: "Piscina", dica: "Lazer e água" },
    { palavra1: "Café", palavra2: "Chá", dica: "Bebidas quentes" },
    { palavra1: "Minecraft", palavra2: "Roblox", dica: "Jogos" },
    { palavra1: "Sol", palavra2: "Lua", dica: "Céu" },
    { palavra1: "Brasil", palavra2: "Japão", dica: "Países" },
    { palavra1: "Futebol", palavra2: "Basquete", dica: "Esportes" },
    { palavra1: "Chocolate", palavra2: "Sorvete", dica: "Doces" },
    { palavra1: "Computador", palavra2: "Celular", dica: "Tecnologia" },

    { palavra1: "Avião", palavra2: "Helicóptero", dica: "Transporte aéreo" },
    { palavra1: "Carro", palavra2: "Moto", dica: "Veículos" },
    { palavra1: "Navio", palavra2: "Submarino", dica: "Transporte marítimo" },
    { palavra1: "Livro", palavra2: "Filme", dica: "Histórias" },
    { palavra1: "Série", palavra2: "Novela", dica: "Televisão" },
    { palavra1: "Cadeira", palavra2: "Sofá", dica: "Móveis" },
    { palavra1: "Cama", palavra2: "Rede", dica: "Descanso" },
    { palavra1: "Garfo", palavra2: "Colher", dica: "Talheres" },
    { palavra1: "Faca", palavra2: "Tesoura", dica: "Objetos cortantes" },
    { palavra1: "Relógio", palavra2: "Calendário", dica: "Tempo" },

    { palavra1: "Escola", palavra2: "Faculdade", dica: "Educação" },
    { palavra1: "Professor", palavra2: "Aluno", dica: "Escola" },
    { palavra1: "Médico", palavra2: "Enfermeiro", dica: "Profissões da saúde" },
    { palavra1: "Policial", palavra2: "Bombeiro", dica: "Profissões públicas" },
    { palavra1: "Advogado", palavra2: "Juiz", dica: "Justiça" },
    { palavra1: "Leão", palavra2: "Tigre", dica: "Felinos" },
    { palavra1: "Elefante", palavra2: "Girafa", dica: "Animais grandes" },
    { palavra1: "Tubarão", palavra2: "Baleia", dica: "Oceano" },
    { palavra1: "Cobra", palavra2: "Lagarto", dica: "Répteis" },
    { palavra1: "Papagaio", palavra2: "Coruja", dica: "Aves" },

    { palavra1: "Maçã", palavra2: "Banana", dica: "Frutas" },
    { palavra1: "Morango", palavra2: "Uva", dica: "Frutas pequenas" },
    { palavra1: "Arroz", palavra2: "Feijão", dica: "Comida brasileira" },
    { palavra1: "Macarrão", palavra2: "Lasanha", dica: "Massas" },
    { palavra1: "Bolo", palavra2: "Torta", dica: "Sobremesas" },
    { palavra1: "Pipoca", palavra2: "Amendoim", dica: "Lanches" },
    { palavra1: "Coca-Cola", palavra2: "Pepsi", dica: "Refrigerantes" },
    { palavra1: "Leite", palavra2: "Iogurte", dica: "Laticínios" },
    { palavra1: "Queijo", palavra2: "Presunto", dica: "Sanduíche" },
    { palavra1: "Limão", palavra2: "Laranja", dica: "Frutas cítricas" },

    { palavra1: "Vermelho", palavra2: "Azul", dica: "Cores" },
    { palavra1: "Preto", palavra2: "Branco", dica: "Cores neutras" },
    { palavra1: "Quadrado", palavra2: "Triângulo", dica: "Formas geométricas" },
    { palavra1: "Círculo", palavra2: "Retângulo", dica: "Formas" },
    { palavra1: "Lápis", palavra2: "Caneta", dica: "Material escolar" },
    { palavra1: "Borracha", palavra2: "Apontador", dica: "Material escolar" },
    { palavra1: "Mochila", palavra2: "Maleta", dica: "Carregar objetos" },
    { palavra1: "Óculos", palavra2: "Binóculo", dica: "Visão" },
    { palavra1: "Espelho", palavra2: "Janela", dica: "Vidro" },
    { palavra1: "Porta", palavra2: "Portão", dica: "Entradas" },

    { palavra1: "Casa", palavra2: "Apartamento", dica: "Moradia" },
    { palavra1: "Cozinha", palavra2: "Banheiro", dica: "Cômodos" },
    { palavra1: "Quarto", palavra2: "Sala", dica: "Cômodos da casa" },
    { palavra1: "Geladeira", palavra2: "Fogão", dica: "Cozinha" },
    { palavra1: "Micro-ondas", palavra2: "Forno", dica: "Cozinhar" },
    { palavra1: "Chuveiro", palavra2: "Banheira", dica: "Banho" },
    { palavra1: "Escova", palavra2: "Pente", dica: "Cabelo" },
    { palavra1: "Sabonete", palavra2: "Shampoo", dica: "Higiene" },
    { palavra1: "Toalha", palavra2: "Cobertor", dica: "Tecido" },
    { palavra1: "Travesseiro", palavra2: "Colchão", dica: "Sono" },

    { palavra1: "Instagram", palavra2: "TikTok", dica: "Redes sociais" },
    { palavra1: "YouTube", palavra2: "Netflix", dica: "Entretenimento digital" },
    { palavra1: "WhatsApp", palavra2: "Discord", dica: "Comunicação" },
    { palavra1: "Google", palavra2: "Bing", dica: "Pesquisa na internet" },
    { palavra1: "Spotify", palavra2: "Deezer", dica: "Música digital" },
    { palavra1: "PlayStation", palavra2: "Xbox", dica: "Videogames" },
    { palavra1: "Nintendo", palavra2: "Sega", dica: "Empresas de jogos" },
    { palavra1: "Mouse", palavra2: "Teclado", dica: "Computador" },
    { palavra1: "Monitor", palavra2: "Televisão", dica: "Telas" },
    { palavra1: "Fone", palavra2: "Caixa de som", dica: "Áudio" },

    { palavra1: "Espada", palavra2: "Escudo", dica: "Batalha medieval" },
    { palavra1: "Rei", palavra2: "Rainha", dica: "Realeza" },
    { palavra1: "Pirata", palavra2: "Ninja", dica: "Personagens" },
    { palavra1: "Dragão", palavra2: "Unicórnio", dica: "Criaturas fantásticas" },
    { palavra1: "Vampiro", palavra2: "Lobisomem", dica: "Criaturas sobrenaturais" },
    { palavra1: "Fantasma", palavra2: "Zumbi", dica: "Terror" },
    { palavra1: "Super-herói", palavra2: "Vilão", dica: "Quadrinhos" },
    { palavra1: "Mágico", palavra2: "Palhaço", dica: "Entretenimento" },
    { palavra1: "Detetive", palavra2: "Espião", dica: "Investigações" },
    { palavra1: "Astronauta", palavra2: "Alienígena", dica: "Espaço" },

    { palavra1: "Marte", palavra2: "Júpiter", dica: "Planetas" },
    { palavra1: "Estrela", palavra2: "Cometa", dica: "Espaço" },
    { palavra1: "Terra", palavra2: "Saturno", dica: "Sistema Solar" },
    { palavra1: "Montanha", palavra2: "Vulcão", dica: "Natureza" },
    { palavra1: "Floresta", palavra2: "Deserto", dica: "Biomas" },
    { palavra1: "Rio", palavra2: "Lago", dica: "Água doce" },
    { palavra1: "Chuva", palavra2: "Neve", dica: "Clima" },
    { palavra1: "Furacão", palavra2: "Tornado", dica: "Fenômenos naturais" },
    { palavra1: "Fogo", palavra2: "Gelo", dica: "Elementos" },
    { palavra1: "Dia", palavra2: "Noite", dica: "Período" },

    { palavra1: "Batman", palavra2: "Homem-Aranha", dica: "Super-heróis" },
    { palavra1: "Mario", palavra2: "Sonic", dica: "Personagens de jogos" },
    { palavra1: "Pokémon", palavra2: "Digimon", dica: "Criaturas de anime" },
    { palavra1: "Naruto", palavra2: "Dragon Ball", dica: "Animes" },
    { palavra1: "Harry Potter", palavra2: "Senhor dos Anéis", dica: "Fantasia" },
    { palavra1: "Star Wars", palavra2: "Star Trek", dica: "Ficção científica" },
    { palavra1: "Shrek", palavra2: "Toy Story", dica: "Animações" },
    { palavra1: "Minecraft", palavra2: "Terraria", dica: "Jogos de sobrevivência" },
    { palavra1: "Fortnite", palavra2: "Free Fire", dica: "Battle Royale" },
    { palavra1: "GTA", palavra2: "Red Dead Redemption", dica: "Jogos da Rockstar" },

    { palavra1: "Dinheiro", palavra2: "Cartão", dica: "Pagamento" },
    { palavra1: "Banco", palavra2: "Caixa eletrônico", dica: "Finanças" },
    { palavra1: "Hospital", palavra2: "Farmácia", dica: "Saúde" },
    { palavra1: "Aeroporto", palavra2: "Rodoviária", dica: "Viagem" },
    { palavra1: "Shopping", palavra2: "Mercado", dica: "Compras" },
    { palavra1: "Restaurante", palavra2: "Padaria", dica: "Comida" },
    { palavra1: "Cinema", palavra2: "Teatro", dica: "Espetáculos" },
    { palavra1: "Parque", palavra2: "Zoológico", dica: "Passeios" },
    { palavra1: "Igreja", palavra2: "Museu", dica: "Locais para visitar" },
    { palavra1: "Estádio", palavra2: "Ginásio", dica: "Eventos esportivos" }

];

let ultimaCategoria = null;

function atualizarJogadores() {
    const quantidade =
        document.querySelectorAll(".jogador").length;

    tituloJogadores.textContent =
        "Jogadores (" + quantidade + "/6)";

    if (quantidade <5) {

        avisoJogadores.textContent =
            "Mínimo: 5 jogadores";

    }

    else if (quantidade === 5) {
        avisoJogadores.textContent =
            "5 Jogadores: 1 impostor";
    }

    else {
        avisoJogadores.textContent =
            "6 Jogadores: 2 Impostores";
    }

}

botaoAdicionar.addEventListener("click", function () {

    const quantidade =
        document.querySelectorAll(".jogador").length;

    // Impede mais de 6 jogadores
    if (quantidade >= 6) {

        alert("O máximo é 6 jogadores!");

        return;

    }


    // Cria uma caixa para o jogador
    const jogadorDiv =
        document.createElement("div");

    jogadorDiv.classList.add("jogadorDiv");


    // Cria o campo de nome
    const input =
        document.createElement("input");

    input.type = "text";

    input.placeholder =
        "Nome do jogador " + (quantidade + 1);

    input.classList.add("jogador");


    // Cria o botão de remover
    const botaoRemover =
        document.createElement("button");

    botaoRemover.textContent = "🗑️";

    botaoRemover.classList.add("removerJogador");


    // Quando clicar no botão de remover
    botaoRemover.addEventListener("click", function () {

        jogadorDiv.remove();

        atualizarJogadores();

    });


    // Coloca os elementos na caixa
    jogadorDiv.appendChild(input);

    jogadorDiv.appendChild(botaoRemover);


    // Coloca a caixa na lista
    listaJogadores.appendChild(jogadorDiv);


    atualizarJogadores();

});

const botaoComecar = document.getElementById("comecarJogo");

botaoComecar.addEventListener("click", function() {

    //pega os inputs que possuam a classe "Jogador"
    const inputs = document.querySelectorAll(".jogador");

    //cria uma lista vazia para guardar os nomes
    const jogadores = [];

    //passa por cada input
    inputs.forEach(function(input) {

        // Pega o nome digitado e remove espaços desnecessários
        const nome = input.value.trim();

        // Só adiciona o jogador se tiver algum nome
        if (nome !== "") {
            jogadores.push(nome);
        }

    });

    //verifica se existem pelo menos 5 jogadores
    if (jogadores.length < 5) {

        alert("São necessários pelo menos 5 jogadores!");

        return;

    }

    // SORTEIA UMA CATEGORIA

    let numeroAleatorio;

    do {

        numeroAleatorio = Math.floor(
            Math.random() * categorias.length
        );

    } while (
        categorias[numeroAleatorio] === ultimaCategoria
    );

    const categoriaEscolhida =
        categorias[numeroAleatorio];

    ultimaCategoria = categoriaEscolhida;

    console.log(categoriaEscolhida);

    const papeis = [

        {
            tipo: "civil",
            palavra: categoriaEscolhida.palavra1
        },

        {
            tipo: "civil",
            palavra: categoriaEscolhida.palavra1
        },

        {
            tipo: "civil",
            palavra: categoriaEscolhida.palavra2
        },

        {
            tipo: "civil",
            palavra: categoriaEscolhida.palavra2
        },

        {
            tipo: "impostor",
            palavra: categoriaEscolhida.dica
        }

    ]

    if (jogadores.length === 6) {

        papeis.push({
            tipo: "impostor",
            palavra: categoriaEscolhida.dica
        });

    }

    papeis.sort(function () {

        return Math.random() - 0.5;

    });

    const partida = [];

    jogadores.forEach(function(jogador, index){

        partida.push({

            nome: jogador,

            tipo: papeis[index].tipo,

            palavra: papeis[index].palavra

        });

    });

    console.log(partida);

    //Esconde a tela inicial
    telaInicial.style.display = "none";

    //Mostra a tela do jogo
    telaJogo.style.display = "flex";

    //Começa pelo primeiro jogador
    let jogadorAtual = 0;

    //função para mostrar o jogador atual
    function mostrarJogador() {

         nomeJogador.textContent =
              "É a vez de " +
              partida[jogadorAtual].nome;

    };

    mostrarJogador();

    botaoMostrar.onclick = function () {

        const jogador = partida[jogadorAtual];

        //Mostrar a área secreta
        palavraSecreta.style.display = "block";

        //Esconde o botão mostrar
        botaoMostrar.style.display = "none";

        //Mostra o tipo de jogador
        tipoJogador.textContent =
            jogador.tipo === "impostor"
                ? "Você é o IMPOSTOR"
                : "Você é CIVIL";

        //Mostra a palavra ou dica
        palavraJogador.textContent =
            jogador.palavra;

    };

    botaoEsconder.onclick = function() {

        //Esconde a palavra
        palavraSecreta.style.display = "none";

        //Mostra novamente o botão
        botaoMostrar.style.display = "block";

        //Vai para o próximo jogador
        jogadorAtual++;

        //Verifica se todos ja viram
        if (jogadorAtual >= partida.length) {

            //esconde a tela do jogo
            telaJogo.style.display = "none";

            //mostra a tela final
            telaFinal.style.display = "block";

            return;

        }

        //Mostra o próximo jogador
        mostrarJogador();

    };

});

botaoNovoJogo.addEventListener("click", function(){

    //esconde a tela final
    telaFinal.style.display = "none";

    //Mostra a tela inicial
    telaInicial.style.display = "block";

})