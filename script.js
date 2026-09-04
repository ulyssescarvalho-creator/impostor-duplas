const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");

const jogadorInicial = document.getElementById("jogadorInicial");
const botaoReiniciar = document.getElementById("reiniciarPartida");

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

const sairPartida =
    document.getElementById("sairPartida");

const categorias = [

    { palavra1: "Sexta-feira", palavra2: "Futuro", dica: "Tempo" },
    { palavra1: "Bombeiro", palavra2: "Astronauta", dica: "Profissões" },
    { palavra1: "Sapato", palavra2: "Boné", dica: "Roupas e acessórios" },
    { palavra1: "Madrugada", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Celular", palavra2: "Notebook", dica: "Tecnologia" },
    { palavra1: "Professor", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Régua", palavra2: "Marcador", dica: "Escola" },
    { palavra1: "Buraco negro", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Astronauta", palavra2: "Pirata", dica: "Personagens e papéis" },
    { palavra1: "Bruxa", palavra2: "Ninja", dica: "Mitologia e fantasia" },
    { palavra1: "Quadro", palavra2: "Trabalho", dica: "Escola" },
    { palavra1: "Cama", palavra2: "Armário", dica: "Casa" },
    { palavra1: "Maracujá", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Refrigerante", palavra2: "Milkshake", dica: "Bebidas" },
    { palavra1: "Aluno", palavra2: "Mochila", dica: "Escola" },
    { palavra1: "Saturno", palavra2: "Alienígena", dica: "Espaço" },
    { palavra1: "Piloto", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Sushi", palavra2: "Salada", dica: "Comidas" },
    { palavra1: "Cometa", palavra2: "Caverna", dica: "Natureza" },
    { palavra1: "Red Dead Redemption", palavra2: "Mario", dica: "Jogos" },
    { palavra1: "Oceano", palavra2: "Coral", dica: "Mar e água" },
    { palavra1: "Coruja", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Unicórnio", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Tênis", palavra2: "Vestido", dica: "Roupas e acessórios" },
    { palavra1: "Girafa", palavra2: "Tartaruga", dica: "Animais" },
    { palavra1: "Padaria", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Sereia", palavra2: "Pirata", dica: "Mitologia e fantasia" },
    { palavra1: "Princesa", palavra2: "Alienígena", dica: "Personagens e papéis" },
    { palavra1: "Professor", palavra2: "Piloto", dica: "Profissões" },
    { palavra1: "Chapéu", palavra2: "Relógio", dica: "Roupas e acessórios" },
    { palavra1: "Piscina", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Janeiro", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Tênis", palavra2: "Anel", dica: "Roupas e acessórios" },
    { palavra1: "Notebook", palavra2: "Drone", dica: "Tecnologia" },
    { palavra1: "Palhaço", palavra2: "Príncipe", dica: "Personagens e papéis" },
    { palavra1: "Controle", palavra2: "Roteador", dica: "Tecnologia" },
    { palavra1: "Preto", palavra2: "Retângulo", dica: "Cores e formas" },
    { palavra1: "Cozinheiro", palavra2: "Fotógrafo", dica: "Profissões" },
    { palavra1: "Navio", palavra2: "Jipe", dica: "Transporte" },
    { palavra1: "Livro", palavra2: "Biblioteca", dica: "Escola" },
    { palavra1: "Gato", palavra2: "Leão", dica: "Animais" },
    { palavra1: "Enfermeiro", palavra2: "Músico", dica: "Profissões" },
    { palavra1: "Enfermeiro", palavra2: "Fotógrafo", dica: "Profissões" },
    { palavra1: "Estante", palavra2: "Travesseiro", dica: "Casa" },
    { palavra1: "Amarelo", palavra2: "Quadrado", dica: "Cores e formas" },
    { palavra1: "Restaurante", palavra2: "Aquário", dica: "Locais" },
    { palavra1: "Junho", palavra2: "Inverno", dica: "Tempo" },
    { palavra1: "Basquete", palavra2: "Beisebol", dica: "Esportes" },
    { palavra1: "Rosa", palavra2: "Pirâmide", dica: "Cores e formas" },
    { palavra1: "Handebol", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Micro-ondas", palavra2: "Ventilador", dica: "Casa" },
    { palavra1: "Arquiteto", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Camisa", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Rei", palavra2: "Fantasma", dica: "Personagens e papéis" },
    { palavra1: "Estrela", palavra2: "Deserto", dica: "Natureza" },
    { palavra1: "Golfinho", palavra2: "Jacaré", dica: "Animais" },
    { palavra1: "Avião", palavra2: "Helicóptero", dica: "Transporte" },
    { palavra1: "Rosa", palavra2: "Esfera", dica: "Cores e formas" },
    { palavra1: "Estádio", palavra2: "Ginásio", dica: "Locais" },
    { palavra1: "Zelda", palavra2: "Sonic", dica: "Jogos" },
    { palavra1: "Tarde", palavra2: "Junho", dica: "Tempo" },
    { palavra1: "Violão", palavra2: "Trombone", dica: "Instrumentos" },
    { palavra1: "Verão", palavra2: "Outono", dica: "Tempo" },
    { palavra1: "Cadeira", palavra2: "Micro-ondas", dica: "Casa" },
    { palavra1: "Tigre", palavra2: "Macaco", dica: "Animais" },
    { palavra1: "Canguru", palavra2: "Tubarão", dica: "Animais" },
    { palavra1: "Computador", palavra2: "Fone de ouvido", dica: "Tecnologia" },
    { palavra1: "Pirulito", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Estrela", palavra2: "Montanha", dica: "Natureza" },
    { palavra1: "Tesoura", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Televisão", palavra2: "Câmera", dica: "Tecnologia" },
    { palavra1: "Cachoeira", palavra2: "Arco-íris", dica: "Natureza" },
    { palavra1: "Super-herói", palavra2: "Rei", dica: "Personagens e papéis" },
    { palavra1: "Cavaquinho", palavra2: "Trombone", dica: "Instrumentos" },
    { palavra1: "Biblioteca", palavra2: "Banco", dica: "Locais" },
    { palavra1: "Borracha", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Submarino", palavra2: "Van", dica: "Transporte" },
    { palavra1: "Hambúrguer", palavra2: "Lasanha", dica: "Comidas" },
    { palavra1: "Ramen", palavra2: "Paella", dica: "Comidas" },
    { palavra1: "Leite", palavra2: "Energético", dica: "Bebidas" },
    { palavra1: "Futebol", palavra2: "Boxe", dica: "Esportes" },
    { palavra1: "Show", palavra2: "Festival", dica: "Entretenimento" },
    { palavra1: "Armário", palavra2: "Tapete", dica: "Casa" },
    { palavra1: "Patinete", palavra2: "Barco", dica: "Transporte" },
    { palavra1: "Cama", palavra2: "Banheira", dica: "Casa" },
    { palavra1: "Barco", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Milkshake", palavra2: "Smoothie", dica: "Bebidas" },
    { palavra1: "Cinza", palavra2: "Esfera", dica: "Cores e formas" },
    { palavra1: "Mercúrio", palavra2: "Urano", dica: "Espaço" },
    { palavra1: "Salada", palavra2: "Paella", dica: "Comidas" },
    { palavra1: "Professor", palavra2: "Caneta", dica: "Escola" },
    { palavra1: "Tarde", palavra2: "Sexta-feira", dica: "Tempo" },
    { palavra1: "Donut", palavra2: "Churros", dica: "Doces" },
    { palavra1: "Verão", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Metrô", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Panqueca", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Marte", palavra2: "Satélite", dica: "Espaço" },
    { palavra1: "Valorant", palavra2: "Mario", dica: "Jogos" },
    { palavra1: "Cinza", palavra2: "Pirâmide", dica: "Cores e formas" },
    { palavra1: "Judô", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Saxofone", palavra2: "Banjo", dica: "Instrumentos" },
    { palavra1: "Óculos", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Celular", palavra2: "Teclado", dica: "Tecnologia" },
    { palavra1: "Inverno", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Camisa", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Natação", palavra2: "Boxe", dica: "Esportes" },
    { palavra1: "Caneta", palavra2: "Régua", dica: "Escola" },
    { palavra1: "Among Us", palavra2: "Cuphead", dica: "Jogos" },
    { palavra1: "Livro", palavra2: "Tesoura", dica: "Escola" },
    { palavra1: "Oceano", palavra2: "Piscina", dica: "Mar e água" },
    { palavra1: "Presente", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Leite", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Primavera", palavra2: "Futuro", dica: "Tempo" },
    { palavra1: "Golfinho", palavra2: "Baleia", dica: "Mar e água" },
    { palavra1: "Brigadeiro", palavra2: "Gelatina", dica: "Doces" },
    { palavra1: "Policial", palavra2: "Músico", dica: "Profissões" },
    { palavra1: "Valorant", palavra2: "Celeste", dica: "Jogos" },
    { palavra1: "Sushi", palavra2: "Strogonoff", dica: "Comidas" },
    { palavra1: "Borracha", palavra2: "Apontador", dica: "Escola" },
    { palavra1: "Vestido", palavra2: "Relógio", dica: "Roupas e acessórios" },
    { palavra1: "Padaria", palavra2: "Aeroporto", dica: "Locais" },
    { palavra1: "Refrigerante", palavra2: "Achocolatado", dica: "Bebidas" },
    { palavra1: "Desenho", palavra2: "Videoclipe", dica: "Entretenimento" },
    { palavra1: "Piano", palavra2: "Oboé", dica: "Instrumentos" },
    { palavra1: "Aluno", palavra2: "Apontador", dica: "Escola" },
    { palavra1: "Novela", palavra2: "Quadrinhos", dica: "Entretenimento" },
    { palavra1: "Limonada", palavra2: "Suco de uva", dica: "Bebidas" },
    { palavra1: "Morango", palavra2: "Mirtilo", dica: "Frutas" },
    { palavra1: "Roblox", palavra2: "Celeste", dica: "Jogos" },
    { palavra1: "Valorant", palavra2: "Zelda", dica: "Jogos" },
    { palavra1: "Preto", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Jornalista", palavra2: "Detetive", dica: "Profissões" },
    { palavra1: "Centauro", palavra2: "Rei", dica: "Mitologia e fantasia" },
    { palavra1: "Régua", palavra2: "Calculadora", dica: "Escola" },
    { palavra1: "Chuveiro", palavra2: "Ventilador", dica: "Casa" },
    { palavra1: "Sofá", palavra2: "Cortina", dica: "Casa" },
    { palavra1: "Banana", palavra2: "Pera", dica: "Frutas" },
    { palavra1: "Ukulele", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Anel", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Girafa", palavra2: "Lobo", dica: "Animais" },
    { palavra1: "Quadrado", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Policial", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Trem", palavra2: "Jipe", dica: "Transporte" },
    { palavra1: "Tesoura", palavra2: "Quadro", dica: "Escola" },
    { palavra1: "Pizza", palavra2: "Burrito", dica: "Comidas" },
    { palavra1: "Foguete", palavra2: "Jipe", dica: "Transporte" },
    { palavra1: "Patinete", palavra2: "Táxi", dica: "Transporte" },
    { palavra1: "Outono", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Hot dog", palavra2: "Sanduíche", dica: "Comidas" },
    { palavra1: "GTA", palavra2: "Celeste", dica: "Jogos" },
    { palavra1: "Coxinha", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Nuvem", palavra2: "Tornado", dica: "Natureza" },
    { palavra1: "Chapéu", palavra2: "Vestido", dica: "Roupas e acessórios" },
    { palavra1: "Televisão", palavra2: "Relógio inteligente", dica: "Tecnologia" },
    { palavra1: "Cometa", palavra2: "Chuva", dica: "Natureza" },
    { palavra1: "Ginásio", palavra2: "Delegacia", dica: "Locais" },
    { palavra1: "Vermelho", palavra2: "Pirâmide", dica: "Cores e formas" },
    { palavra1: "Teclado", palavra2: "Roteador", dica: "Tecnologia" },
    { palavra1: "Bala", palavra2: "Mousse", dica: "Doces" },
    { palavra1: "Cometa", palavra2: "Nuvem", dica: "Natureza" },
    { palavra1: "Donut", palavra2: "Mousse", dica: "Doces" },
    { palavra1: "Madrugada", palavra2: "Dezembro", dica: "Tempo" },
    { palavra1: "Controle", palavra2: "Drone", dica: "Tecnologia" },
    { palavra1: "Vermelho", palavra2: "Estrela", dica: "Cores e formas" },
    { palavra1: "Golfe", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Madrugada", palavra2: "Junho", dica: "Tempo" },
    { palavra1: "Tênis", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Rosa", palavra2: "Triângulo", dica: "Cores e formas" },
    { palavra1: "Caixa de som", palavra2: "Videogame", dica: "Tecnologia" },
    { palavra1: "Bolo", palavra2: "Pirulito", dica: "Doces" },
    { palavra1: "Grifo", palavra2: "Rei", dica: "Mitologia e fantasia" },
    { palavra1: "Fogão", palavra2: "Ventilador", dica: "Casa" },
    { palavra1: "Bicicleta", palavra2: "Patinete", dica: "Transporte" },
    { palavra1: "Lago", palavra2: "Piscina", dica: "Mar e água" },
    { palavra1: "Overwatch", palavra2: "Stardew Valley", dica: "Jogos" },
    { palavra1: "Floresta", palavra2: "Arco-íris", dica: "Natureza" },
    { palavra1: "Zebra", palavra2: "Papagaio", dica: "Animais" },
    { palavra1: "Barco", palavra2: "Farol", dica: "Mar e água" },
    { palavra1: "Rosa", palavra2: "Quadrado", dica: "Cores e formas" },
    { palavra1: "Dragão", palavra2: "Fênix", dica: "Mitologia e fantasia" },
    { palavra1: "Advogado", palavra2: "Astronauta", dica: "Profissões" },
    { palavra1: "Triângulo", palavra2: "Cubo", dica: "Cores e formas" },
    { palavra1: "Unicórnio", palavra2: "Bruxa", dica: "Mitologia e fantasia" },
    { palavra1: "Aeroporto", palavra2: "Hotel", dica: "Locais" },
    { palavra1: "Televisão", palavra2: "Impressora", dica: "Tecnologia" },
    { palavra1: "Uva", palavra2: "Melancia", dica: "Frutas" },
    { palavra1: "Brownie", palavra2: "Paçoca", dica: "Doces" },
    { palavra1: "Forno", palavra2: "Travesseiro", dica: "Casa" },
    { palavra1: "Chá", palavra2: "Chá gelado", dica: "Bebidas" },
    { palavra1: "Ônibus", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Galáxia", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Donut", palavra2: "Pirulito", dica: "Doces" },
    { palavra1: "Documentário", palavra2: "Musical", dica: "Entretenimento" },
    { palavra1: "Red Dead Redemption", palavra2: "Free Fire", dica: "Jogos" },
    { palavra1: "Carro", palavra2: "Jipe", dica: "Transporte" },
    { palavra1: "Trompete", palavra2: "Banjo", dica: "Instrumentos" },
    { palavra1: "Skate", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Lua", palavra2: "Neve", dica: "Natureza" },
    { palavra1: "Médico", palavra2: "Programador", dica: "Profissões" },
    { palavra1: "Ilha", palavra2: "Coral", dica: "Mar e água" },
    { palavra1: "Sorvete", palavra2: "Bolo", dica: "Doces" },
    { palavra1: "Maçã", palavra2: "Manga", dica: "Frutas" },
    { palavra1: "Médico", palavra2: "Advogado", dica: "Profissões" },
    { palavra1: "Ambulância", palavra2: "Van", dica: "Transporte" },
    { palavra1: "Roxo", palavra2: "Coração", dica: "Cores e formas" },
    { palavra1: "Marte", palavra2: "Galáxia", dica: "Espaço" },
    { palavra1: "Noite", palavra2: "Segunda-feira", dica: "Tempo" },
    { palavra1: "Lápis", palavra2: "Régua", dica: "Escola" },
    { palavra1: "Coxinha", palavra2: "Yakissoba", dica: "Comidas" },
    { palavra1: "Satélite", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Branco", palavra2: "Cinza", dica: "Cores e formas" },
    { palavra1: "Filme", palavra2: "Quadrinhos", dica: "Entretenimento" },
    { palavra1: "Hospital", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Pokémon", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Carro", palavra2: "Moto", dica: "Transporte" },
    { palavra1: "Cookie", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Príncipe", palavra2: "Alienígena", dica: "Personagens e papéis" },
    { palavra1: "Chuveiro", palavra2: "Luminária", dica: "Casa" },
    { palavra1: "Golfinho", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Cuphead", palavra2: "Free Fire", dica: "Jogos" },
    { palavra1: "Ônibus", palavra2: "Trator", dica: "Transporte" },
    { palavra1: "Astronauta", palavra2: "Nebulosa", dica: "Espaço" },
    { palavra1: "Pera", palavra2: "Mamão", dica: "Frutas" },
    { palavra1: "Buraco negro", palavra2: "Meteorito", dica: "Espaço" },
    { palavra1: "Omelete", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Estrela", palavra2: "Nuvem", dica: "Natureza" },
    { palavra1: "Ukulele", palavra2: "Xilofone", dica: "Instrumentos" },
    { palavra1: "Brigadeiro", palavra2: "Cheesecake", dica: "Doces" },
    { palavra1: "Sorvete", palavra2: "Brigadeiro", dica: "Doces" },
    { palavra1: "Parque", palavra2: "Aquário", dica: "Locais" },
    { palavra1: "Marte", palavra2: "Astronauta", dica: "Espaço" },
    { palavra1: "Torta", palavra2: "Pudim", dica: "Doces" },
    { palavra1: "Micro-ondas", palavra2: "Banheira", dica: "Casa" },
    { palavra1: "Risoto", palavra2: "Sanduíche", dica: "Comidas" },
    { palavra1: "League of Legends", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Baixo", palavra2: "Ukulele", dica: "Instrumentos" },
    { palavra1: "Fogão", palavra2: "Chuveiro", dica: "Casa" },
    { palavra1: "Óculos", palavra2: "Anel", dica: "Roupas e acessórios" },
    { palavra1: "Ciclismo", palavra2: "Esgrima", dica: "Esportes" },
    { palavra1: "Floresta", palavra2: "Lago", dica: "Natureza" },
    { palavra1: "Overwatch", palavra2: "Celeste", dica: "Jogos" },
    { palavra1: "Saxofone", palavra2: "Tambor", dica: "Instrumentos" },
    { palavra1: "Skate", palavra2: "Handebol", dica: "Esportes" },
    { palavra1: "Parque", palavra2: "Praça", dica: "Locais" },
    { palavra1: "Banana", palavra2: "Manga", dica: "Frutas" },
    { palavra1: "Segunda-feira", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Netuno", palavra2: "Satélite", dica: "Espaço" },
    { palavra1: "Centauro", palavra2: "Lobisomem", dica: "Mitologia e fantasia" },
    { palavra1: "Segunda-feira", palavra2: "Hora", dica: "Tempo" },
    { palavra1: "Ilha", palavra2: "Medusa", dica: "Mar e água" },
    { palavra1: "Calça", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Luvas", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Torta", palavra2: "Cookie", dica: "Doces" },
    { palavra1: "Bateria", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Corrida", palavra2: "Surfe", dica: "Esportes" },
    { palavra1: "Rei", palavra2: "Hacker", dica: "Personagens e papéis" },
    { palavra1: "Fogão", palavra2: "Luminária", dica: "Casa" },
    { palavra1: "Pera", palavra2: "Cereja", dica: "Frutas" },
    { palavra1: "Cortina", palavra2: "Travesseiro", dica: "Casa" },
    { palavra1: "Flauta", palavra2: "Tambor", dica: "Instrumentos" },
    { palavra1: "Boné", palavra2: "Jaqueta", dica: "Roupas e acessórios" },
    { palavra1: "Dezembro", palavra2: "Inverno", dica: "Tempo" },
    { palavra1: "Professor", palavra2: "Livro", dica: "Escola" },
    { palavra1: "Natação", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Caneta", palavra2: "Prova", dica: "Escola" },
    { palavra1: "Tubarão", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Celular", palavra2: "Mouse", dica: "Tecnologia" },
    { palavra1: "Manhã", palavra2: "Janeiro", dica: "Tempo" },
    { palavra1: "Advogado", palavra2: "Músico", dica: "Profissões" },
    { palavra1: "Água", palavra2: "Café gelado", dica: "Bebidas" },
    { palavra1: "Série", palavra2: "Teatro", dica: "Entretenimento" },
    { palavra1: "Reality show", palavra2: "Museu", dica: "Entretenimento" },
    { palavra1: "Saxofone", palavra2: "Trompete", dica: "Instrumentos" },
    { palavra1: "Brownie", palavra2: "Pirulito", dica: "Doces" },
    { palavra1: "Galáxia", palavra2: "Satélite", dica: "Espaço" },
    { palavra1: "Laranja", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Madrugada", palavra2: "Verão", dica: "Tempo" },
    { palavra1: "Skate", palavra2: "Esgrima", dica: "Esportes" },
    { palavra1: "Cama", palavra2: "Travesseiro", dica: "Casa" },
    { palavra1: "Cachoeira", palavra2: "Navio", dica: "Mar e água" },
    { palavra1: "Rio", palavra2: "Cachoeira", dica: "Mar e água" },
    { palavra1: "Basquete", palavra2: "Surfe", dica: "Esportes" },
    { palavra1: "Cobertor", palavra2: "Luminária", dica: "Casa" },
    { palavra1: "Professor", palavra2: "Biblioteca", dica: "Escola" },
    { palavra1: "Guitarra", palavra2: "Piano", dica: "Instrumentos" },
    { palavra1: "Lua", palavra2: "Deserto", dica: "Natureza" },
    { palavra1: "Vôlei", palavra2: "Rugby", dica: "Esportes" },
    { palavra1: "Guitarra", palavra2: "Bateria", dica: "Instrumentos" },
    { palavra1: "Manga", palavra2: "Mamão", dica: "Frutas" },
    { palavra1: "Camisa", palavra2: "Boné", dica: "Roupas e acessórios" },
    { palavra1: "Mouse", palavra2: "Pendrive", dica: "Tecnologia" },
    { palavra1: "Corrida", palavra2: "Karatê", dica: "Esportes" },
    { palavra1: "Xilofone", palavra2: "Cavaquinho", dica: "Instrumentos" },
    { palavra1: "Terra", palavra2: "Meteorito", dica: "Espaço" },
    { palavra1: "Sereia", palavra2: "Rainha", dica: "Mitologia e fantasia" },
    { palavra1: "Computador", palavra2: "Mouse", dica: "Tecnologia" },
    { palavra1: "Urso", palavra2: "Tartaruga", dica: "Animais" },
    { palavra1: "Submarino", palavra2: "Trator", dica: "Transporte" },
    { palavra1: "Advogado", palavra2: "Veterinário", dica: "Profissões" },
    { palavra1: "Uva", palavra2: "Melão", dica: "Frutas" },
    { palavra1: "Janeiro", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Colar", palavra2: "Bolsa", dica: "Roupas e acessórios" },
    { palavra1: "Padaria", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Trompete", palavra2: "Cavaquinho", dica: "Instrumentos" },
    { palavra1: "Lua", palavra2: "Cachoeira", dica: "Natureza" },
    { palavra1: "Policial", palavra2: "Piloto", dica: "Profissões" },
    { palavra1: "Caixa de som", palavra2: "Controle", dica: "Tecnologia" },
    { palavra1: "Chocolate", palavra2: "Pudim", dica: "Doces" },
    { palavra1: "Trem", palavra2: "Bonde", dica: "Transporte" },
    { palavra1: "Trabalho", palavra2: "Biblioteca", dica: "Escola" },
    { palavra1: "Livro", palavra2: "Museu", dica: "Entretenimento" },
    { palavra1: "Restaurante", palavra2: "Aeroporto", dica: "Locais" },
    { palavra1: "Teclado", palavra2: "Banjo", dica: "Instrumentos" },
    { palavra1: "Piscina", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Geladeira", palavra2: "Fogão", dica: "Casa" },
    { palavra1: "Barco", palavra2: "Submarino", dica: "Mar e água" },
    { palavra1: "Pera", palavra2: "Coco", dica: "Frutas" },
    { palavra1: "Terra", palavra2: "Astronauta", dica: "Espaço" },
    { palavra1: "Teclado", palavra2: "Flauta", dica: "Instrumentos" },
    { palavra1: "Estádio", palavra2: "Praça", dica: "Locais" },
    { palavra1: "Policial", palavra2: "Fotógrafo", dica: "Profissões" },
    { palavra1: "Banheira", palavra2: "Espelho", dica: "Casa" },
    { palavra1: "Juiz", palavra2: "Piloto", dica: "Profissões" },
    { palavra1: "Shopping", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Harpa", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Madrugada", palavra2: "Futuro", dica: "Tempo" },
    { palavra1: "Manga", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Fantasma", palavra2: "Hacker", dica: "Personagens e papéis" },
    { palavra1: "Carro", palavra2: "Van", dica: "Transporte" },
    { palavra1: "Xadrez", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Rodoviária", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Filme", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Cookie", palavra2: "Donut", dica: "Doces" },
    { palavra1: "Vitamina", palavra2: "Água de coco", dica: "Bebidas" },
    { palavra1: "Pizza", palavra2: "Omelete", dica: "Comidas" },
    { palavra1: "Novela", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Feiticeiro", palavra2: "Rainha", dica: "Mitologia e fantasia" },
    { palavra1: "Galáxia", palavra2: "Asteroide", dica: "Espaço" },
    { palavra1: "Basquete", palavra2: "Ciclismo", dica: "Esportes" },
    { palavra1: "Ginásio", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Pastel", palavra2: "Empada", dica: "Comidas" },
    { palavra1: "Avião", palavra2: "Bonde", dica: "Transporte" },
    { palavra1: "Milkshake", palavra2: "Achocolatado", dica: "Bebidas" },
    { palavra1: "Caderno", palavra2: "Quadro", dica: "Escola" },
    { palavra1: "Roblox", palavra2: "GTA", dica: "Jogos" },
    { palavra1: "Fada", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Série", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Sorvete", palavra2: "Paçoca", dica: "Doces" },
    { palavra1: "Vilão", palavra2: "Astronauta", dica: "Personagens e papéis" },
    { palavra1: "Montanha", palavra2: "Chuva", dica: "Natureza" },
    { palavra1: "Cappuccino", palavra2: "Mate", dica: "Bebidas" },
    { palavra1: "Torta", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Rainha", palavra2: "Ninja", dica: "Mitologia e fantasia" },
    { palavra1: "Cometa", palavra2: "Lago", dica: "Natureza" },
    { palavra1: "Moto", palavra2: "Caminhão", dica: "Transporte" },
    { palavra1: "Chapéu", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Reality show", palavra2: "Festival", dica: "Entretenimento" },
    { palavra1: "Chapéu", palavra2: "Cachecol", dica: "Roupas e acessórios" },
    { palavra1: "Teclado", palavra2: "Caixa de som", dica: "Tecnologia" },
    { palavra1: "Estrela", palavra2: "Chuva", dica: "Natureza" },
    { palavra1: "Segunda-feira", palavra2: "Passado", dica: "Tempo" },
    { palavra1: "Trompete", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Macarrão", palavra2: "Esfiha", dica: "Comidas" },
    { palavra1: "Filme", palavra2: "Série", dica: "Entretenimento" },
    { palavra1: "Trompete", palavra2: "Xilofone", dica: "Instrumentos" },
    { palavra1: "Saturno", palavra2: "Meteorito", dica: "Espaço" },
    { palavra1: "Chocolate", palavra2: "Caramelo", dica: "Doces" },
    { palavra1: "Palhaço", palavra2: "Ninja", dica: "Personagens e papéis" },
    { palavra1: "Mercado", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Mágico", palavra2: "Príncipe", dica: "Personagens e papéis" },
    { palavra1: "Ciclismo", palavra2: "Handebol", dica: "Esportes" },
    { palavra1: "Manga", palavra2: "Limão", dica: "Frutas" },
    { palavra1: "Coelho", palavra2: "Canguru", dica: "Animais" },
    { palavra1: "Morango", palavra2: "Pêssego", dica: "Frutas" },
    { palavra1: "Macarrão", palavra2: "Yakissoba", dica: "Comidas" },
    { palavra1: "Gigante", palavra2: "Grifo", dica: "Mitologia e fantasia" },
    { palavra1: "Bruxa", palavra2: "Rei", dica: "Mitologia e fantasia" },
    { palavra1: "Caneta", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Rodoviária", palavra2: "Delegacia", dica: "Locais" },
    { palavra1: "Rio", palavra2: "Lago", dica: "Natureza" },
    { palavra1: "Filme", palavra2: "Concerto", dica: "Entretenimento" },
    { palavra1: "Preto", palavra2: "Cinza", dica: "Cores e formas" },
    { palavra1: "Rodoviária", palavra2: "Teatro", dica: "Locais" },
    { palavra1: "Manhã", palavra2: "Segunda-feira", dica: "Tempo" },
    { palavra1: "Laranja", palavra2: "Cereja", dica: "Frutas" },
    { palavra1: "Panqueca", palavra2: "Strogonoff", dica: "Comidas" },
    { palavra1: "Lobo", palavra2: "Coruja", dica: "Animais" },
    { palavra1: "Vitamina", palavra2: "Mate", dica: "Bebidas" },
    { palavra1: "Gigante", palavra2: "Rainha", dica: "Mitologia e fantasia" },
    { palavra1: "Deserto", palavra2: "Tornado", dica: "Natureza" },
    { palavra1: "Morango", palavra2: "Limão", dica: "Frutas" },
    { palavra1: "Vermelho", palavra2: "Retângulo", dica: "Cores e formas" },
    { palavra1: "Canguru", palavra2: "Papagaio", dica: "Animais" },
    { palavra1: "Ônibus", palavra2: "Caminhão", dica: "Transporte" },
    { palavra1: "Televisão", palavra2: "Pendrive", dica: "Tecnologia" },
    { palavra1: "Estrela", palavra2: "Ilha", dica: "Natureza" },
    { palavra1: "Azul", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Manga", palavra2: "Melão", dica: "Frutas" },
    { palavra1: "Junho", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Minecraft", palavra2: "Among Us", dica: "Jogos" },
    { palavra1: "Pudim", palavra2: "Gelatina", dica: "Doces" },
    { palavra1: "Vôlei", palavra2: "Surfe", dica: "Esportes" },
    { palavra1: "Teatro", palavra2: "Stand-up", dica: "Entretenimento" },
    { palavra1: "Limão", palavra2: "Pêssego", dica: "Frutas" },
    { palavra1: "Cozinheiro", palavra2: "Piloto", dica: "Profissões" },
    { palavra1: "Rei", palavra2: "Princesa", dica: "Personagens e papéis" },
    { palavra1: "Documentário", palavra2: "Videoclipe", dica: "Entretenimento" },
    { palavra1: "Energético", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Limão", palavra2: "Kiwi", dica: "Frutas" },
    { palavra1: "Palhaço", palavra2: "Zumbi", dica: "Personagens e papéis" },
    { palavra1: "Tambor", palavra2: "Banjo", dica: "Instrumentos" },
    { palavra1: "Bombeiro", palavra2: "Detetive", dica: "Profissões" },
    { palavra1: "Vilão", palavra2: "Pirata", dica: "Personagens e papéis" },
    { palavra1: "Pirata", palavra2: "Zumbi", dica: "Personagens e papéis" },
    { palavra1: "Enfermeiro", palavra2: "Astronauta", dica: "Profissões" },
    { palavra1: "Show", palavra2: "Stand-up", dica: "Entretenimento" },
    { palavra1: "Aluno", palavra2: "Cola", dica: "Escola" },
    { palavra1: "Vermelho", palavra2: "Quadrado", dica: "Cores e formas" },
    { palavra1: "Médico", palavra2: "Juiz", dica: "Profissões" },
    { palavra1: "Super-herói", palavra2: "Alienígena", dica: "Personagens e papéis" },
    { palavra1: "Macarrão", palavra2: "Quibe", dica: "Comidas" },
    { palavra1: "Sol", palavra2: "Rio", dica: "Natureza" },
    { palavra1: "Urano", palavra2: "Nebulosa", dica: "Espaço" },
    { palavra1: "Refrigerante", palavra2: "Mate", dica: "Bebidas" },
    { palavra1: "Cozinheiro", palavra2: "Detetive", dica: "Profissões" },
    { palavra1: "League of Legends", palavra2: "Overwatch", dica: "Jogos" },
    { palavra1: "Vôlei", palavra2: "Tênis", dica: "Esportes" },
    { palavra1: "Lago", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Chocolate", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Ginástica", palavra2: "Rugby", dica: "Esportes" },
    { palavra1: "Cachorro", palavra2: "Cavalo", dica: "Animais" },
    { palavra1: "Esgrima", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Polvo", palavra2: "Jacaré", dica: "Animais" },
    { palavra1: "Sorvete", palavra2: "Donut", dica: "Doces" },
    { palavra1: "Lasanha", palavra2: "Sushi", dica: "Comidas" },
    { palavra1: "Coração", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Surfe", palavra2: "Rugby", dica: "Esportes" },
    { palavra1: "Noite", palavra2: "Sexta-feira", dica: "Tempo" },
    { palavra1: "Terraria", palavra2: "Sonic", dica: "Jogos" },
    { palavra1: "Fortnite", palavra2: "Celeste", dica: "Jogos" },
    { palavra1: "Lua", palavra2: "Montanha", dica: "Natureza" },
    { palavra1: "Acordeão", palavra2: "Oboé", dica: "Instrumentos" },
    { palavra1: "Cachoeira", palavra2: "Tubarão", dica: "Mar e água" },
    { palavra1: "Tarde", palavra2: "Semana", dica: "Tempo" },
    { palavra1: "Mesa", palavra2: "Fogão", dica: "Casa" },
    { palavra1: "Amarelo", palavra2: "Cubo", dica: "Cores e formas" },
    { palavra1: "Coruja", palavra2: "Jacaré", dica: "Animais" },
    { palavra1: "Helicóptero", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Cupcake", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Cavalo", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Acordeão", palavra2: "Xilofone", dica: "Instrumentos" },
    { palavra1: "Floresta", palavra2: "Caverna", dica: "Natureza" },
    { palavra1: "Novela", palavra2: "Anime", dica: "Entretenimento" },
    { palavra1: "Hospital", palavra2: "Museu", dica: "Locais" },
    { palavra1: "Júpiter", palavra2: "Constelação", dica: "Espaço" },
    { palavra1: "The Sims", palavra2: "Cuphead", dica: "Jogos" },
    { palavra1: "Nuvem", palavra2: "Chuva", dica: "Natureza" },
    { palavra1: "Caneta", palavra2: "Recreio", dica: "Escola" },
    { palavra1: "Sorvete", palavra2: "Mousse", dica: "Doces" },
    { palavra1: "Aluno", palavra2: "Tesoura", dica: "Escola" },
    { palavra1: "Celular", palavra2: "Microfone", dica: "Tecnologia" },
    { palavra1: "Filme", palavra2: "Circo", dica: "Entretenimento" },
    { palavra1: "Documentário", palavra2: "Desenho", dica: "Entretenimento" },
    { palavra1: "Milkshake", palavra2: "Suco de uva", dica: "Bebidas" },
    { palavra1: "Handebol", palavra2: "Karatê", dica: "Esportes" },
    { palavra1: "Aluno", palavra2: "Quadro", dica: "Escola" },
    { palavra1: "Travesseiro", palavra2: "Cobertor", dica: "Casa" },
    { palavra1: "Coelho", palavra2: "Cavalo", dica: "Animais" },
    { palavra1: "Praia", palavra2: "Neve", dica: "Natureza" },
    { palavra1: "Pizza", palavra2: "Lasanha", dica: "Comidas" },
    { palavra1: "Tigre", palavra2: "Coelho", dica: "Animais" },
    { palavra1: "The Sims", palavra2: "Pokémon", dica: "Jogos" },
    { palavra1: "Farmácia", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Pastel", palavra2: "Omelete", dica: "Comidas" },
    { palavra1: "Aeroporto", palavra2: "Parque", dica: "Locais" },
    { palavra1: "Anão", palavra2: "Mago", dica: "Mitologia e fantasia" },
    { palavra1: "Carro", palavra2: "Ambulância", dica: "Transporte" },
    { palavra1: "Elefante", palavra2: "Lobo", dica: "Animais" },
    { palavra1: "Nhoque", palavra2: "Strogonoff", dica: "Comidas" },
    { palavra1: "Fortnite", palavra2: "League of Legends", dica: "Jogos" },
    { palavra1: "Chocolate quente", palavra2: "Chá gelado", dica: "Bebidas" },
    { palavra1: "Monitor", palavra2: "Drone", dica: "Tecnologia" },
    { palavra1: "Rei", palavra2: "Rainha", dica: "Personagens e papéis" },
    { palavra1: "Vestido", palavra2: "Cinto", dica: "Roupas e acessórios" },
    { palavra1: "Mar", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Enfermeiro", palavra2: "Piloto", dica: "Profissões" },
    { palavra1: "Vulcão", palavra2: "Nuvem", dica: "Natureza" },
    { palavra1: "Apontador", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Preto", palavra2: "Triângulo", dica: "Cores e formas" },
    { palavra1: "Flauta", palavra2: "Violino", dica: "Instrumentos" },
    { palavra1: "Pêssego", palavra2: "Mirtilo", dica: "Frutas" },
    { palavra1: "Maracujá", palavra2: "Framboesa", dica: "Frutas" },
    { palavra1: "Triângulo", palavra2: "Pirâmide", dica: "Cores e formas" },
    { palavra1: "Anime", palavra2: "Musical", dica: "Entretenimento" },
    { palavra1: "Travesseiro", palavra2: "Vaso", dica: "Casa" },
    { palavra1: "Trem", palavra2: "Submarino", dica: "Transporte" },
    { palavra1: "Astronauta", palavra2: "Zumbi", dica: "Personagens e papéis" },
    { palavra1: "Táxi", palavra2: "Ambulância", dica: "Transporte" },
    { palavra1: "Sol", palavra2: "Floresta", dica: "Natureza" },
    { palavra1: "Judô", palavra2: "Karatê", dica: "Esportes" },
    { palavra1: "Pudim", palavra2: "Cookie", dica: "Doces" },
    { palavra1: "Pulseira", palavra2: "Bolsa", dica: "Roupas e acessórios" },
    { palavra1: "Vitamina", palavra2: "Suco de uva", dica: "Bebidas" },
    { palavra1: "Enfermeiro", palavra2: "Arquiteto", dica: "Profissões" },
    { palavra1: "Hotel", palavra2: "Delegacia", dica: "Locais" },
    { palavra1: "Baleia", palavra2: "Tubarão", dica: "Mar e água" },
    { palavra1: "Barco", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Mouse", palavra2: "Projetor", dica: "Tecnologia" },
    { palavra1: "Roxo", palavra2: "Quadrado", dica: "Cores e formas" },
    { palavra1: "Brownie", palavra2: "Cheesecake", dica: "Doces" },
    { palavra1: "Chocolate", palavra2: "Mousse", dica: "Doces" },
    { palavra1: "Aluno", palavra2: "Biblioteca", dica: "Escola" },
    { palavra1: "Programador", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Oceano", palavra2: "Rio", dica: "Mar e água" },
    { palavra1: "Mar", palavra2: "Piscina", dica: "Mar e água" },
    { palavra1: "Corrida", palavra2: "Esgrima", dica: "Esportes" },
    { palavra1: "Suco", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Stardew Valley", palavra2: "Pokémon", dica: "Jogos" },
    { palavra1: "Caneta", palavra2: "Quadro", dica: "Escola" },
    { palavra1: "Armário", palavra2: "Luminária", dica: "Casa" },
    { palavra1: "Sushi", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Televisão", palavra2: "Projetor", dica: "Tecnologia" },
    { palavra1: "Padaria", palavra2: "Museu", dica: "Locais" },
    { palavra1: "Hospital", palavra2: "Banco", dica: "Locais" },
    { palavra1: "Fotógrafo", palavra2: "Veterinário", dica: "Profissões" },
    { palavra1: "Chocolate quente", palavra2: "Energético", dica: "Bebidas" },
    { palavra1: "Banana", palavra2: "Kiwi", dica: "Frutas" },
    { palavra1: "Limão", palavra2: "Mamão", dica: "Frutas" },
    { palavra1: "Geladeira", palavra2: "Cortina", dica: "Casa" },
    { palavra1: "Teclado", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Triângulo", palavra2: "Trombone", dica: "Instrumentos" },
    { palavra1: "Sofá", palavra2: "Geladeira", dica: "Casa" },
    { palavra1: "Limão", palavra2: "Melão", dica: "Frutas" },
    { palavra1: "Fortnite", palavra2: "Overwatch", dica: "Jogos" },
    { palavra1: "Cookie", palavra2: "Churros", dica: "Doces" },
    { palavra1: "Shopping", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Astronauta", palavra2: "Ninja", dica: "Personagens e papéis" },
    { palavra1: "Paçoca", palavra2: "Cheesecake", dica: "Doces" },
    { palavra1: "Gigante", palavra2: "Rei", dica: "Mitologia e fantasia" },
    { palavra1: "Energético", palavra2: "Mate", dica: "Bebidas" },
    { palavra1: "Príncipe", palavra2: "Monstro", dica: "Personagens e papéis" },
    { palavra1: "Elfo", palavra2: "Rainha", dica: "Mitologia e fantasia" },
    { palavra1: "Astronauta", palavra2: "Explorador", dica: "Personagens e papéis" },
    { palavra1: "Moto", palavra2: "Navio", dica: "Transporte" },
    { palavra1: "Café", palavra2: "Achocolatado", dica: "Bebidas" },
    { palavra1: "Futebol", palavra2: "Vôlei", dica: "Esportes" },
    { palavra1: "Filme", palavra2: "Documentário", dica: "Entretenimento" },
    { palavra1: "Banheira", palavra2: "Tapete", dica: "Casa" },
    { palavra1: "Tênis", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Palhaço", palavra2: "Robô", dica: "Personagens e papéis" },
    { palavra1: "League of Legends", palavra2: "Zelda", dica: "Jogos" },
    { palavra1: "Janeiro", palavra2: "Passado", dica: "Tempo" },
    { palavra1: "Roxo", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Trem", palavra2: "Ambulância", dica: "Transporte" },
    { palavra1: "Mario", palavra2: "Free Fire", dica: "Jogos" },
    { palavra1: "Caverna", palavra2: "Nuvem", dica: "Natureza" },
    { palavra1: "Praia", palavra2: "Cachoeira", dica: "Natureza" },
    { palavra1: "Chapéu", palavra2: "Anel", dica: "Roupas e acessórios" },
    { palavra1: "Apontador", palavra2: "Calculadora", dica: "Escola" },
    { palavra1: "Café", palavra2: "Chá gelado", dica: "Bebidas" },
    { palavra1: "Quadrinhos", palavra2: "Musical", dica: "Entretenimento" },
    { palavra1: "Morango", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Forno", palavra2: "Micro-ondas", dica: "Casa" },
    { palavra1: "Achocolatado", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Fone de ouvido", palavra2: "Projetor", dica: "Tecnologia" },
    { palavra1: "Vilão", palavra2: "Palhaço", dica: "Personagens e papéis" },
    { palavra1: "Metrô", palavra2: "Ambulância", dica: "Transporte" },
    { palavra1: "Vestido", palavra2: "Meia", dica: "Roupas e acessórios" },
    { palavra1: "Dragão", palavra2: "Unicórnio", dica: "Mitologia e fantasia" },
    { palavra1: "Caixa de som", palavra2: "Projetor", dica: "Tecnologia" },
    { palavra1: "Gato", palavra2: "Tartaruga", dica: "Animais" },
    { palavra1: "Tarde", palavra2: "Futuro", dica: "Tempo" },
    { palavra1: "Abacaxi", palavra2: "Maracujá", dica: "Frutas" },
    { palavra1: "Ginásio", palavra2: "Banco", dica: "Locais" },
    { palavra1: "Sereia", palavra2: "Elfo", dica: "Mitologia e fantasia" },
    { palavra1: "Filme", palavra2: "Novela", dica: "Entretenimento" },
    { palavra1: "Lápis", palavra2: "Marcador", dica: "Escola" },
    { palavra1: "Livro", palavra2: "Festival", dica: "Entretenimento" },
    { palavra1: "Dragão", palavra2: "Vampiro", dica: "Mitologia e fantasia" },
    { palavra1: "Celeste", palavra2: "Cuphead", dica: "Jogos" },
    { palavra1: "Netuno", palavra2: "Asteroide", dica: "Espaço" },
    { palavra1: "Astronauta", palavra2: "Hacker", dica: "Personagens e papéis" },
    { palavra1: "Espelho", palavra2: "Cobertor", dica: "Casa" },
    { palavra1: "Farmácia", palavra2: "Biblioteca", dica: "Locais" },
    { palavra1: "Nebulosa", palavra2: "Asteroide", dica: "Espaço" },
    { palavra1: "Bolsa", palavra2: "Cinto", dica: "Roupas e acessórios" },
    { palavra1: "Urso", palavra2: "Cavalo", dica: "Animais" },
    { palavra1: "Rodoviária", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Restaurante", palavra2: "Museu", dica: "Locais" },
    { palavra1: "Impressora", palavra2: "Videogame", dica: "Tecnologia" },
    { palavra1: "Trem", palavra2: "Metrô", dica: "Transporte" },
    { palavra1: "Sereia", palavra2: "Fênix", dica: "Mitologia e fantasia" },
    { palavra1: "Montanha", palavra2: "Cachoeira", dica: "Natureza" },
    { palavra1: "Kiwi", palavra2: "Mirtilo", dica: "Frutas" },
    { palavra1: "Estádio", palavra2: "Teatro", dica: "Locais" },
    { palavra1: "Gigante", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Basquete", palavra2: "Corrida", dica: "Esportes" },
    { palavra1: "Achocolatado", palavra2: "Energético", dica: "Bebidas" },
    { palavra1: "Rodoviária", palavra2: "Museu", dica: "Locais" },
    { palavra1: "Churrasco", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Príncipe", palavra2: "Fantasma", dica: "Personagens e papéis" },
    { palavra1: "Cavalo", palavra2: "Polvo", dica: "Animais" },
    { palavra1: "Circo", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Estádio", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Yakissoba", palavra2: "Paella", dica: "Comidas" },
    { palavra1: "Suco", palavra2: "Chocolate quente", dica: "Bebidas" },
    { palavra1: "Água", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Baleia", palavra2: "Polvo", dica: "Animais" },
    { palavra1: "Hospital", palavra2: "Padaria", dica: "Locais" },
    { palavra1: "Desenho", palavra2: "Show", dica: "Entretenimento" },
    { palavra1: "Ciclismo", palavra2: "Beisebol", dica: "Esportes" },
    { palavra1: "Girafa", palavra2: "Jacaré", dica: "Animais" },
    { palavra1: "Alienígena", palavra2: "Buraco negro", dica: "Espaço" },
    { palavra1: "Praia", palavra2: "Navio", dica: "Mar e água" },
    { palavra1: "League of Legends", palavra2: "GTA", dica: "Jogos" },
    { palavra1: "Caderno", palavra2: "Calculadora", dica: "Escola" },
    { palavra1: "Taco", palavra2: "Sanduíche", dica: "Comidas" },
    { palavra1: "Judô", palavra2: "Rugby", dica: "Esportes" },
    { palavra1: "Unicórnio", palavra2: "Elfo", dica: "Mitologia e fantasia" },
    { palavra1: "Futebol", palavra2: "Basquete", dica: "Esportes" },
    { palavra1: "Mesa", palavra2: "Estante", dica: "Casa" },
    { palavra1: "Melancia", palavra2: "Mirtilo", dica: "Frutas" },
    { palavra1: "Quadrado", palavra2: "Retângulo", dica: "Cores e formas" },
    { palavra1: "Marte", palavra2: "Meteorito", dica: "Espaço" },
    { palavra1: "Geladeira", palavra2: "Vaso", dica: "Casa" },
    { palavra1: "Guitarra", palavra2: "Oboé", dica: "Instrumentos" },
    { palavra1: "Piloto", palavra2: "Fotógrafo", dica: "Profissões" },
    { palavra1: "Alienígena", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Violão", palavra2: "Violino", dica: "Instrumentos" },
    { palavra1: "Saxofone", palavra2: "Harpa", dica: "Instrumentos" },
    { palavra1: "Príncipe", palavra2: "Princesa", dica: "Personagens e papéis" },
    { palavra1: "Uva", palavra2: "Maracujá", dica: "Frutas" },
    { palavra1: "Pastel", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Médico", palavra2: "Enfermeiro", dica: "Profissões" },
    { palavra1: "Gato", palavra2: "Raposa", dica: "Animais" },
    { palavra1: "Sexta-feira", palavra2: "Domingo", dica: "Tempo" },
    { palavra1: "Hambúrguer", palavra2: "Feijoada", dica: "Comidas" },
    { palavra1: "Rio", palavra2: "Caverna", dica: "Natureza" },
    { palavra1: "Espião", palavra2: "Palhaço", dica: "Personagens e papéis" },
    { palavra1: "Natação", palavra2: "Handebol", dica: "Esportes" },
    { palavra1: "Robô", palavra2: "Monstro", dica: "Personagens e papéis" },
    { palavra1: "Caminhão", palavra2: "Táxi", dica: "Transporte" },
    { palavra1: "Handebol", palavra2: "Ginástica", dica: "Esportes" },
    { palavra1: "Estante", palavra2: "Chuveiro", dica: "Casa" },
    { palavra1: "Chá", palavra2: "Suco", dica: "Bebidas" },
    { palavra1: "Série", palavra2: "Documentário", dica: "Entretenimento" },
    { palavra1: "Morango", palavra2: "Uva", dica: "Frutas" },
    { palavra1: "Desenho", palavra2: "Cinema", dica: "Entretenimento" },
    { palavra1: "Detetive", palavra2: "Rei", dica: "Personagens e papéis" },
    { palavra1: "Estádio", palavra2: "Hotel", dica: "Locais" },
    { palavra1: "Calça", palavra2: "Cinto", dica: "Roupas e acessórios" },
    { palavra1: "Maçã", palavra2: "Melancia", dica: "Frutas" },
    { palavra1: "Morango", palavra2: "Pera", dica: "Frutas" },
    { palavra1: "Taco", palavra2: "Empada", dica: "Comidas" },
    { palavra1: "Galáxia", palavra2: "Foguete", dica: "Espaço" },
    { palavra1: "Aluno", palavra2: "Marcador", dica: "Escola" },
    { palavra1: "Burrito", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Terra", palavra2: "Telescópio", dica: "Espaço" },
    { palavra1: "Cachoeira", palavra2: "Praia", dica: "Mar e água" },
    { palavra1: "Futebol", palavra2: "Rugby", dica: "Esportes" },
    { palavra1: "Dragão", palavra2: "Grifo", dica: "Mitologia e fantasia" },
    { palavra1: "Piscina", palavra2: "Navio", dica: "Mar e água" },
    { palavra1: "Teclado", palavra2: "Saxofone", dica: "Instrumentos" },
    { palavra1: "Surfe", palavra2: "Ginástica", dica: "Esportes" },
    { palavra1: "Netuno", palavra2: "Buraco negro", dica: "Espaço" },
    { palavra1: "Branco", palavra2: "Rosa", dica: "Cores e formas" },
    { palavra1: "Fone de ouvido", palavra2: "Pendrive", dica: "Tecnologia" },
    { palavra1: "Banana", palavra2: "Limão", dica: "Frutas" },
    { palavra1: "Triângulo", palavra2: "Coração", dica: "Cores e formas" },
    { palavra1: "Taco", palavra2: "Feijoada", dica: "Comidas" },
    { palavra1: "Acordeão", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Podcast", palavra2: "Musical", dica: "Entretenimento" },
    { palavra1: "GTA", palavra2: "Mario", dica: "Jogos" },
    { palavra1: "Coco", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Morango", palavra2: "Maracujá", dica: "Frutas" },
    { palavra1: "Banco", palavra2: "Delegacia", dica: "Locais" },
    { palavra1: "Dragão", palavra2: "Mago", dica: "Mitologia e fantasia" },
    { palavra1: "Minecraft", palavra2: "Free Fire", dica: "Jogos" },
    { palavra1: "Anão", palavra2: "Pirata", dica: "Mitologia e fantasia" },
    { palavra1: "Floresta", palavra2: "Praia", dica: "Natureza" },
    { palavra1: "Feijoada", palavra2: "Yakissoba", dica: "Comidas" },
    { palavra1: "Borracha", palavra2: "Régua", dica: "Escola" },
    { palavra1: "Cachecol", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Fantasma", palavra2: "Robô", dica: "Personagens e papéis" },
    { palavra1: "Meia", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Navio", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Ator", palavra2: "Músico", dica: "Profissões" },
    { palavra1: "Brigadeiro", palavra2: "Cupcake", dica: "Doces" },
    { palavra1: "Sofá", palavra2: "Fogão", dica: "Casa" },
    { palavra1: "Videoclipe", palavra2: "Reality show", dica: "Entretenimento" },
    { palavra1: "Sofá", palavra2: "Tapete", dica: "Casa" },
    { palavra1: "Jipe", palavra2: "Barco", dica: "Transporte" },
    { palavra1: "Brownie", palavra2: "Gelatina", dica: "Doces" },
    { palavra1: "Super-herói", palavra2: "Robô", dica: "Personagens e papéis" },
    { palavra1: "Chá", palavra2: "Café gelado", dica: "Bebidas" },
    { palavra1: "Vênus", palavra2: "Urano", dica: "Espaço" },
    { palavra1: "Monitor", palavra2: "Fone de ouvido", dica: "Tecnologia" },
    { palavra1: "Amarelo", palavra2: "Roxo", dica: "Cores e formas" },
    { palavra1: "Vermelho", palavra2: "Branco", dica: "Cores e formas" },
    { palavra1: "Fênix", palavra2: "Pirata", dica: "Mitologia e fantasia" },
    { palavra1: "Computador", palavra2: "Relógio inteligente", dica: "Tecnologia" },
    { palavra1: "Cachoeira", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Helicóptero", palavra2: "Submarino", dica: "Transporte" },
    { palavra1: "Sereia", palavra2: "Lobisomem", dica: "Mitologia e fantasia" },
    { palavra1: "Panda", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Panqueca", palavra2: "Feijoada", dica: "Comidas" },
    { palavra1: "Anão", palavra2: "Centauro", dica: "Mitologia e fantasia" },
    { palavra1: "Sexta-feira", palavra2: "Janeiro", dica: "Tempo" },
    { palavra1: "Recreio", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Refrigerante", palavra2: "Suco de uva", dica: "Bebidas" },
    { palavra1: "Círculo", palavra2: "Losango", dica: "Cores e formas" },
    { palavra1: "Caixa de som", palavra2: "Roteador", dica: "Tecnologia" },
    { palavra1: "Vulcão", palavra2: "Deserto", dica: "Natureza" },
    { palavra1: "Moto", palavra2: "Submarino", dica: "Transporte" },
    { palavra1: "Netuno", palavra2: "Galáxia", dica: "Espaço" },
    { palavra1: "Cachoeira", palavra2: "Baleia", dica: "Mar e água" },
    { palavra1: "Rainha", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Pendrive", palavra2: "Roteador", dica: "Tecnologia" },
    { palavra1: "Chá", palavra2: "Milkshake", dica: "Bebidas" },
    { palavra1: "Café", palavra2: "Leite", dica: "Bebidas" },
    { palavra1: "Churros", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Golfe", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Chocolate quente", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Pudim", palavra2: "Cheesecake", dica: "Doces" },
    { palavra1: "Leite", palavra2: "Limonada", dica: "Bebidas" },
    { palavra1: "Overwatch", palavra2: "Sonic", dica: "Jogos" },
    { palavra1: "Policial", palavra2: "Dentista", dica: "Profissões" },
    { palavra1: "Manga", palavra2: "Melancia", dica: "Frutas" },
    { palavra1: "Professor", palavra2: "Astronauta", dica: "Profissões" },
    { palavra1: "League of Legends", palavra2: "Cuphead", dica: "Jogos" },
    { palavra1: "Relógio inteligente", palavra2: "Microfone", dica: "Tecnologia" },
    { palavra1: "Bombeiro", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Sol", palavra2: "Cometa", dica: "Natureza" },
    { palavra1: "Vênus", palavra2: "Constelação", dica: "Espaço" },
    { palavra1: "Limão", palavra2: "Mirtilo", dica: "Frutas" },
    { palavra1: "Carro", palavra2: "Barco", dica: "Transporte" },
    { palavra1: "Filme", palavra2: "Stand-up", dica: "Entretenimento" },
    { palavra1: "Desenho", palavra2: "Concerto", dica: "Entretenimento" },
    { palavra1: "Programador", palavra2: "Veterinário", dica: "Profissões" },
    { palavra1: "Vulcão", palavra2: "Chuva", dica: "Natureza" },
    { palavra1: "Submarino", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Noite", palavra2: "Verão", dica: "Tempo" },
    { palavra1: "Água", palavra2: "Suco de uva", dica: "Bebidas" },
    { palavra1: "Abacaxi", palavra2: "Limão", dica: "Frutas" },
    { palavra1: "Rosa", palavra2: "Estrela", dica: "Cores e formas" },
    { palavra1: "Ginásio", palavra2: "Zoológico", dica: "Locais" },
    { palavra1: "Red Dead Redemption", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Nhoque", palavra2: "Paella", dica: "Comidas" },
    { palavra1: "Cuphead", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Vestido", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Caderno", palavra2: "Cola", dica: "Escola" },
    { palavra1: "Cupcake", palavra2: "Bala", dica: "Doces" },
    { palavra1: "Limonada", palavra2: "Água de coco", dica: "Bebidas" },
    { palavra1: "Cama", palavra2: "Forno", dica: "Casa" },
    { palavra1: "Concerto", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Madrugada", palavra2: "Passado", dica: "Tempo" },
    { palavra1: "Urso", palavra2: "Baleia", dica: "Animais" },
    { palavra1: "Chuveiro", palavra2: "Banheira", dica: "Casa" },
    { palavra1: "Barco", palavra2: "Baleia", dica: "Mar e água" },
    { palavra1: "Cama", palavra2: "Ventilador", dica: "Casa" },
    { palavra1: "Futebol", palavra2: "Skate", dica: "Esportes" },
    { palavra1: "Risoto", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Ônibus", palavra2: "Ambulância", dica: "Transporte" },
    { palavra1: "Macaco", palavra2: "Golfinho", dica: "Animais" },
    { palavra1: "Médico", palavra2: "Ator", dica: "Profissões" },
    { palavra1: "Calça", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Pirata", palavra2: "Rainha", dica: "Personagens e papéis" },
    { palavra1: "GTA", palavra2: "Sonic", dica: "Jogos" },
    { palavra1: "Abacaxi", palavra2: "Ameixa", dica: "Frutas" },
    { palavra1: "Manhã", palavra2: "Noite", dica: "Tempo" },
    { palavra1: "Mágico", palavra2: "Monstro", dica: "Personagens e papéis" },
    { palavra1: "Tesoura", palavra2: "Biblioteca", dica: "Escola" },
    { palavra1: "Vilão", palavra2: "Explorador", dica: "Personagens e papéis" },
    { palavra1: "GTA", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Alienígena", palavra2: "Nebulosa", dica: "Espaço" },
    { palavra1: "Monitor", palavra2: "Microfone", dica: "Tecnologia" },
    { palavra1: "Laranja", palavra2: "Preto", dica: "Cores e formas" },
    { palavra1: "Saia", palavra2: "Pulseira", dica: "Roupas e acessórios" },
    { palavra1: "Documentário", palavra2: "Concerto", dica: "Entretenimento" },
    { palavra1: "Zumbi", palavra2: "Hacker", dica: "Personagens e papéis" },
    { palavra1: "Calça", palavra2: "Relógio", dica: "Roupas e acessórios" },
    { palavra1: "Avião", palavra2: "Táxi", dica: "Transporte" },
    { palavra1: "Cavaleiro", palavra2: "Ninja", dica: "Mitologia e fantasia" },
    { palavra1: "Júpiter", palavra2: "Astronauta", dica: "Espaço" },
    { palavra1: "Saturno", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Mate", palavra2: "Chá gelado", dica: "Bebidas" },
    { palavra1: "Mouse", palavra2: "Roteador", dica: "Tecnologia" },
    { palavra1: "Quadro", palavra2: "Recreio", dica: "Escola" },
    { palavra1: "Triângulo", palavra2: "Retângulo", dica: "Cores e formas" },
    { palavra1: "Café", palavra2: "Água de coco", dica: "Bebidas" },
    { palavra1: "Cadeira", palavra2: "Sofá", dica: "Casa" },
    { palavra1: "Anel", palavra2: "Bolsa", dica: "Roupas e acessórios" },
    { palavra1: "Leite", palavra2: "Café gelado", dica: "Bebidas" },
    { palavra1: "Cookie", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Série", palavra2: "Novela", dica: "Entretenimento" },
    { palavra1: "Lua", palavra2: "Praia", dica: "Natureza" },
    { palavra1: "Limonada", palavra2: "Suco de laranja", dica: "Bebidas" },
    { palavra1: "Corrida", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Lago", palavra2: "Mergulho", dica: "Mar e água" },
    { palavra1: "Ukulele", palavra2: "Tambor", dica: "Instrumentos" },
    { palavra1: "Coxinha", palavra2: "Quibe", dica: "Comidas" },
    { palavra1: "Fênix", palavra2: "Rainha", dica: "Mitologia e fantasia" },
    { palavra1: "Rainha", palavra2: "Alienígena", dica: "Personagens e papéis" },
    { palavra1: "Chuveiro", palavra2: "Cortina", dica: "Casa" },
    { palavra1: "Júpiter", palavra2: "Satélite", dica: "Espaço" },
    { palavra1: "Tubarão", palavra2: "Onda", dica: "Mar e água" },
    { palavra1: "Enfermeiro", palavra2: "Professor", dica: "Profissões" },
    { palavra1: "Oceano", palavra2: "Onda", dica: "Mar e água" },
    { palavra1: "Caminhão", palavra2: "Van", dica: "Transporte" },
    { palavra1: "Cinema", palavra2: "Concerto", dica: "Entretenimento" },
    { palavra1: "Fada", palavra2: "Ninja", dica: "Mitologia e fantasia" },
    { palavra1: "Flauta", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Câmera", palavra2: "Videogame", dica: "Tecnologia" },
    { palavra1: "Mágico", palavra2: "Zumbi", dica: "Personagens e papéis" },
    { palavra1: "Boné", palavra2: "Luvas", dica: "Roupas e acessórios" },
    { palavra1: "Dragão", palavra2: "Centauro", dica: "Mitologia e fantasia" },
    { palavra1: "Cinza", palavra2: "Quadrado", dica: "Cores e formas" },
    { palavra1: "Elefante", palavra2: "Cavalo", dica: "Animais" },
    { palavra1: "Delegacia", palavra2: "Aquário", dica: "Locais" },
    { palavra1: "Avião", palavra2: "Trator", dica: "Transporte" },
    { palavra1: "Hambúrguer", palavra2: "Panqueca", dica: "Comidas" },
    { palavra1: "Teatro", palavra2: "Show", dica: "Entretenimento" },
    { palavra1: "Jaqueta", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Caixa de som", palavra2: "Impressora", dica: "Tecnologia" },
    { palavra1: "Cometa", palavra2: "Ilha", dica: "Natureza" },
    { palavra1: "Tarde", palavra2: "Noite", dica: "Tempo" },
    { palavra1: "Netuno", palavra2: "Foguete", dica: "Espaço" },
    { palavra1: "Pera", palavra2: "Maracujá", dica: "Frutas" },
    { palavra1: "Polvo", palavra2: "Pinguim", dica: "Animais" },
    { palavra1: "Cadeira", palavra2: "Banheira", dica: "Casa" },
    { palavra1: "Elfo", palavra2: "Fênix", dica: "Mitologia e fantasia" },
    { palavra1: "Cadeira", palavra2: "Fogão", dica: "Casa" },
    { palavra1: "Terraria", palavra2: "GTA", dica: "Jogos" },
    { palavra1: "Segunda-feira", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Sapato", palavra2: "Bolsa", dica: "Roupas e acessórios" },
    { palavra1: "Espelho", palavra2: "Tapete", dica: "Casa" },
    { palavra1: "Milkshake", palavra2: "Chá gelado", dica: "Bebidas" },
    { palavra1: "Morango", palavra2: "Kiwi", dica: "Frutas" },
    { palavra1: "Dragão", palavra2: "Gigante", dica: "Mitologia e fantasia" },
    { palavra1: "Manga", palavra2: "Laranja", dica: "Frutas" },
    { palavra1: "Gato", palavra2: "Canguru", dica: "Animais" },
    { palavra1: "Moto", palavra2: "Bonde", dica: "Transporte" },
    { palavra1: "Bolo", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Flauta", palavra2: "Saxofone", dica: "Instrumentos" },
    { palavra1: "Chocolate", palavra2: "Pirulito", dica: "Doces" },
    { palavra1: "Empada", palavra2: "Paella", dica: "Comidas" },
    { palavra1: "Primavera", palavra2: "Passado", dica: "Tempo" },
    { palavra1: "Corrida", palavra2: "Handebol", dica: "Esportes" },
    { palavra1: "Forno", palavra2: "Ventilador", dica: "Casa" },
    { palavra1: "Advogado", palavra2: "Juiz", dica: "Profissões" },
    { palavra1: "Jaqueta", palavra2: "Vestido", dica: "Roupas e acessórios" },
    { palavra1: "Centauro", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Futebol", palavra2: "Karatê", dica: "Esportes" },
    { palavra1: "Estádio", palavra2: "Aquário", dica: "Locais" },
    { palavra1: "Dragão", palavra2: "Elfo", dica: "Mitologia e fantasia" },
    { palavra1: "Cinema", palavra2: "Videoclipe", dica: "Entretenimento" },
    { palavra1: "Anime", palavra2: "Concerto", dica: "Entretenimento" },
    { palavra1: "Régua", palavra2: "Recreio", dica: "Escola" },
    { palavra1: "Circo", palavra2: "Show", dica: "Entretenimento" },
    { palavra1: "Navio", palavra2: "Submarino", dica: "Transporte" },
    { palavra1: "Relógio", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Leão", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Mercado", palavra2: "Aquário", dica: "Locais" },
    { palavra1: "Montanha", palavra2: "Praia", dica: "Natureza" },
    { palavra1: "Mago", palavra2: "Ninja", dica: "Mitologia e fantasia" },
    { palavra1: "Netuno", palavra2: "Meteorito", dica: "Espaço" },
    { palavra1: "Stand-up", palavra2: "Festival", dica: "Entretenimento" },
    { palavra1: "Fotógrafo", palavra2: "Dentista", dica: "Profissões" },
    { palavra1: "Achocolatado", palavra2: "Café gelado", dica: "Bebidas" },
    { palavra1: "Anão", palavra2: "Cavaleiro", dica: "Mitologia e fantasia" },
    { palavra1: "Saturno", palavra2: "Asteroide", dica: "Espaço" },
    { palavra1: "Elefante", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Guitarra", palavra2: "Baixo", dica: "Instrumentos" },
    { palavra1: "Moto", palavra2: "Jipe", dica: "Transporte" },
    { palavra1: "Urano", palavra2: "Foguete", dica: "Espaço" },
    { palavra1: "Forno", palavra2: "Chuveiro", dica: "Casa" },
    { palavra1: "Mercúrio", palavra2: "Galáxia", dica: "Espaço" },
    { palavra1: "Azul", palavra2: "Triângulo", dica: "Cores e formas" },
    { palavra1: "Notebook", palavra2: "Teclado", dica: "Tecnologia" },
    { palavra1: "Tablet", palavra2: "Monitor", dica: "Tecnologia" },
    { palavra1: "Notebook", palavra2: "Mouse", dica: "Tecnologia" },
    { palavra1: "Submarino", palavra2: "Farol", dica: "Mar e água" },
    { palavra1: "Ninja", palavra2: "Rei", dica: "Personagens e papéis" },
    { palavra1: "Sapato", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Netuno", palavra2: "Constelação", dica: "Espaço" },
    { palavra1: "Paçoca", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Restaurante", palavra2: "Praça", dica: "Locais" },
    { palavra1: "Pirulito", palavra2: "Paçoca", dica: "Doces" },
    { palavra1: "Violão", palavra2: "Xilofone", dica: "Instrumentos" },
    { palavra1: "Cookie", palavra2: "Caramelo", dica: "Doces" },
    { palavra1: "Vulcão", palavra2: "Cachoeira", dica: "Natureza" },
    { palavra1: "Leite", palavra2: "Chocolate quente", dica: "Bebidas" },
    { palavra1: "Luvas", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Nebulosa", palavra2: "Constelação", dica: "Espaço" },
    { palavra1: "Rosa", palavra2: "Cinza", dica: "Cores e formas" },
    { palavra1: "Boxe", palavra2: "Surfe", dica: "Esportes" },
    { palavra1: "Urso", palavra2: "Coruja", dica: "Animais" },
    { palavra1: "Tigre", palavra2: "Jacaré", dica: "Animais" },
    { palavra1: "Outono", palavra2: "Minuto", dica: "Tempo" },
    { palavra1: "Praia", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Caverna", palavra2: "Neve", dica: "Natureza" },
    { palavra1: "Avião", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Basquete", palavra2: "Ginástica", dica: "Esportes" },
    { palavra1: "Armário", palavra2: "Cortina", dica: "Casa" },
    { palavra1: "Espelho", palavra2: "Vaso", dica: "Casa" },
    { palavra1: "Jaqueta", palavra2: "Anel", dica: "Roupas e acessórios" },
    { palavra1: "Mercúrio", palavra2: "Netuno", dica: "Espaço" },
    { palavra1: "Submarino", palavra2: "Polvo", dica: "Mar e água" },
    { palavra1: "Natação", palavra2: "Surfe", dica: "Esportes" },
    { palavra1: "Avião", palavra2: "Barco", dica: "Transporte" },
    { palavra1: "Pudim", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Espião", palavra2: "Hacker", dica: "Personagens e papéis" },
    { palavra1: "Ilha", palavra2: "Nuvem", dica: "Natureza" },
    { palavra1: "Vilão", palavra2: "Fantasma", dica: "Personagens e papéis" },
    { palavra1: "Quadrado", palavra2: "Coração", dica: "Cores e formas" },
    { palavra1: "Cupcake", palavra2: "Caramelo", dica: "Doces" },
    { palavra1: "Suco", palavra2: "Energético", dica: "Bebidas" },
    { palavra1: "Trem", palavra2: "Foguete", dica: "Transporte" },
    { palavra1: "Urso", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Baleia", palavra2: "Pinguim", dica: "Animais" },
    { palavra1: "Outono", palavra2: "Hora", dica: "Tempo" },
    { palavra1: "Galáxia", palavra2: "Constelação", dica: "Espaço" },
    { palavra1: "League of Legends", palavra2: "The Sims", dica: "Jogos" },
    { palavra1: "Novela", palavra2: "Stand-up", dica: "Entretenimento" },
    { palavra1: "Gelatina", palavra2: "Pavê", dica: "Doces" },
    { palavra1: "Minecraft", palavra2: "Fall Guys", dica: "Jogos" },
    { palavra1: "Colar", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Policial", palavra2: "Professor", dica: "Profissões" },
    { palavra1: "Caderno", palavra2: "Carteira", dica: "Escola" },
    { palavra1: "Podcast", palavra2: "Stand-up", dica: "Entretenimento" },
    { palavra1: "Praça", palavra2: "Hotel", dica: "Locais" },
    { palavra1: "Surfe", palavra2: "Futsal", dica: "Esportes" },
    { palavra1: "Show", palavra2: "Livro", dica: "Entretenimento" },
    { palavra1: "Lasanha", palavra2: "Empada", dica: "Comidas" },
    { palavra1: "Cachecol", palavra2: "Relógio", dica: "Roupas e acessórios" },
    { palavra1: "Juiz", palavra2: "Arquiteto", dica: "Profissões" },
    { palavra1: "Hambúrguer", palavra2: "Coxinha", dica: "Comidas" },
    { palavra1: "Detetive", palavra2: "Músico", dica: "Profissões" },
    { palavra1: "Macaco", palavra2: "Águia", dica: "Animais" },
    { palavra1: "Programador", palavra2: "Fotógrafo", dica: "Profissões" },
    { palavra1: "Preto", palavra2: "Coração", dica: "Cores e formas" },
    { palavra1: "Baixo", palavra2: "Tambor", dica: "Instrumentos" },
    { palavra1: "Torta", palavra2: "Marshmallow", dica: "Doces" },
    { palavra1: "Professor", palavra2: "Aluno", dica: "Escola" },
    { palavra1: "Vilão", palavra2: "Rainha", dica: "Personagens e papéis" },
    { palavra1: "Saia", palavra2: "Mochila", dica: "Roupas e acessórios" },
    { palavra1: "Cachorro", palavra2: "Canguru", dica: "Animais" },
    { palavra1: "Retângulo", palavra2: "Esfera", dica: "Cores e formas" },
    { palavra1: "Dragão", palavra2: "Bruxa", dica: "Mitologia e fantasia" },
    { palavra1: "Rodoviária", palavra2: "Praça", dica: "Locais" },
    { palavra1: "Xilofone", palavra2: "Trombone", dica: "Instrumentos" },
    { palavra1: "Palhaço", palavra2: "Astronauta", dica: "Personagens e papéis" },
    { palavra1: "Hot dog", palavra2: "Omelete", dica: "Comidas" },
    { palavra1: "Skate", palavra2: "Ciclismo", dica: "Esportes" },
    { palavra1: "Piscina", palavra2: "Medusa", dica: "Mar e água" },
    { palavra1: "Girafa", palavra2: "Papagaio", dica: "Animais" },
    { palavra1: "Cometa", palavra2: "Vento", dica: "Natureza" },
    { palavra1: "Lago", palavra2: "Barco", dica: "Mar e água" },
    { palavra1: "Cupcake", palavra2: "Mousse", dica: "Doces" },
    { palavra1: "Tarde", palavra2: "Domingo", dica: "Tempo" },
    { palavra1: "Medusa", palavra2: "Farol", dica: "Mar e água" },
    { palavra1: "Lápis", palavra2: "Caderno", dica: "Escola" },
    { palavra1: "Computador", palavra2: "Câmera", dica: "Tecnologia" },
    { palavra1: "Beisebol", palavra2: "Esgrima", dica: "Esportes" },
    { palavra1: "Água de coco", palavra2: "Smoothie", dica: "Bebidas" },
    { palavra1: "Violão", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Gato", palavra2: "Elefante", dica: "Animais" },
    { palavra1: "The Sims", palavra2: "Sonic", dica: "Jogos" },
    { palavra1: "Fone de ouvido", palavra2: "Relógio inteligente", dica: "Tecnologia" },
    { palavra1: "Losango", palavra2: "Esfera", dica: "Cores e formas" },
    { palavra1: "Micro-ondas", palavra2: "Cobertor", dica: "Casa" },
    { palavra1: "Raposa", palavra2: "Cavalo", dica: "Animais" },
    { palavra1: "Vôlei", palavra2: "Xadrez", dica: "Esportes" },
    { palavra1: "Vênus", palavra2: "Asteroide", dica: "Espaço" },
    { palavra1: "Óculos", palavra2: "Colar", dica: "Roupas e acessórios" },
    { palavra1: "Torta", palavra2: "Pirulito", dica: "Doces" },
    { palavra1: "Tarde", palavra2: "Primavera", dica: "Tempo" },
    { palavra1: "Cachorro", palavra2: "Girafa", dica: "Animais" },
    { palavra1: "Médico", palavra2: "Bombeiro", dica: "Profissões" },
    { palavra1: "Roblox", palavra2: "Terraria", dica: "Jogos" },
    { palavra1: "Super-herói", palavra2: "Mágico", dica: "Personagens e papéis" },
    { palavra1: "Strogonoff", palavra2: "Ramen", dica: "Comidas" },
    { palavra1: "Urso", palavra2: "Pinguim", dica: "Animais" },
    { palavra1: "Urano", palavra2: "Estação espacial", dica: "Espaço" },
    { palavra1: "Carro", palavra2: "Avião", dica: "Transporte" },
    { palavra1: "Programador", palavra2: "Jornalista", dica: "Profissões" },
    { palavra1: "Desenho", palavra2: "Anime", dica: "Entretenimento" },
    { palavra1: "Travesseiro", palavra2: "Luminária", dica: "Casa" },
    { palavra1: "Refrigerante", palavra2: "Água de coco", dica: "Bebidas" },
    { palavra1: "Piano", palavra2: "Triângulo", dica: "Instrumentos" },
    { palavra1: "Preto", palavra2: "Rosa", dica: "Cores e formas" },
    { palavra1: "Noite", palavra2: "Domingo", dica: "Tempo" },
    { palavra1: "Avião", palavra2: "Submarino", dica: "Transporte" },
    { palavra1: "Mar", palavra2: "Lago", dica: "Mar e água" },
    { palavra1: "Hambúrguer", palavra2: "Strogonoff", dica: "Comidas" },
    { palavra1: "Câmera", palavra2: "Projetor", dica: "Tecnologia" },
    { palavra1: "Sereia", palavra2: "Gigante", dica: "Mitologia e fantasia" },
    { palavra1: "Mousse", palavra2: "Churros", dica: "Doces" },
    { palavra1: "Melão", palavra2: "Mamão", dica: "Frutas" },
    { palavra1: "Panda", palavra2: "Coruja", dica: "Animais" }

];

let ultimoJogador = null;
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

function iniciarPartida () {

    botaoMostrar.style.display = "block";

    palavraSecreta.style.display = "none";

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

            let numeroSorteado;

            do {
                numeroSorteado = Math.floor(
                    Math.random() * jogadores.length
                );

            } while (
                jogadores[numeroSorteado] === ultimoJogador
            );

            ultimoJogador = jogadores[numeroSorteado];

            jogadorInicial.textContent = "O jogador inicial é: " + jogadores[numeroSorteado];


            return;

        }

        //Mostra o próximo jogador
        mostrarJogador();

    };

}

const botaoComecar = document.getElementById("comecarJogo");

botaoComecar.addEventListener("click", function() {

    iniciarPartida();

});

botaoNovoJogo.addEventListener("click", function(){

    //esconde a tela final
    telaFinal.style.display = "none";

    //Mostra a tela inicial
    telaInicial.style.display = "block";

})

botaoReiniciar.addEventListener("click", function(){

    iniciarPartida();

})

sairPartida.addEventListener("click", function(){

    telaJogo.style.display = "none";

    telaInicial.style.display = "block";

})