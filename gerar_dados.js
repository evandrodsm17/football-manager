/*
 * SCRIPT GERADOR DE BANCO DE DADOS FICTÍCIO
 * Destino: database.json
 */

const fs = require('fs');

// --- CONFIGURAÇÃO ---

const timesSerieA_2025 = [
    "Athletico-PR", "Atlético-GO", "Atlético-MG", "Bahia", "Botafogo", "Ceará",
    "Corinthians", "Cruzeiro", "Cuiabá", "Flamengo", "Fluminense",
    "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol",
    "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Vasco da Gama", "Vitória"
];

const nomesFicticios = [
    "Gabriel", "Lucas", "Pedro", "Matheus", "Enzo", "Miguel", "Arthur", "Bruno",
    "Caio", "Davi", "Felipe", "Gustavo", "Heitor", "João", "Leonardo", "Thiago",
    "Vinicius", "Rafael", "Daniel", "Marcos", "Diego", "André", "Carlos", "Eduardo",
    "Luis", "Antonio", "Evandro", "Fernando", "Ricardo", "Roberto", "Alexandre",
    "Leandro", "Marcelo", "Paulo", "Sérgio", "Rodrigo", "Renato", "Vitor", "Guilherme",
    "Fábio", "Francisco", "Juliano", "César", "Henrique", "Igor", "Jonas", "Kevin",
    "Luan", "Murilo", "Nathan", "Otávio", "Patrick", "Raul", "Samuel", "Tiago",
    "William", "Yuri", "Alan", "Benício", "Dante", "Erick", "Fabrício", "Gael",
    "Hugo", "Isaac", "Joaquim", "Kauan", "Lorenzo", "Moisés", "Nicolas", "Oscar",
    "Pietro", "Ruan", "Saulo", "Thales", "Ulisses", "Vicente", "Walter", "Xavier",
    "Yago", "Anderson", "Bento", "Cristiano", "Diogo", "Emanuel", "Frederico",
    "Hélio", "Ícaro", "Jean", "Kelvin", "Luciano", "Mário", "Nícolas", "Orlando",
    "Pierre", "Ramon", "Silas", "Téo", "Valentim", "Wilson", "Zacarias",
    "João Pedro", "Pedro Henrique", "Luiz Gustavo", "Carlos Eduardo", "Paulo Henrique",
    "João Miguel", "Miguel Ângelo", "João Vitor", "Arthur Henrique", "Lucas Gabriel",
    "Henrique Miguel", "Matheus Gabriel", "Gabriel Lucas", "João Antônio", "Rafael Henrique",
    "Vitor Hugo", "Davi Luiz", "Felipe Augusto", "Caio César", "Pedro Lucas",
    "João Paulo", "Luiz Felipe", "Enzo Gabriel", "Carlos Alberto", "Eduardo Henrique",
    "André Luiz", "Lucas Vinicius", "Bruno César", "José Augusto", "Antônio Carlos",
    "Ricardo Alexandre", "Marcelo José", "Renato Luís", "Roberto Carlos", "Sérgio Ricardo",
    "João Guilherme", "Gustavo Henrique", "Mateus Vinícius", "Paulo Sérgio", "Tiago André",
    "Leonardo Gabriel", "Alexandre Felipe", "Fábio Júnior", "Fernando Henrique",
    "Rafael Matheus", "Lucas Eduardo", "Heitor Gabriel", "Daniel Augusto",
    "Enzo Rafael", "Caio Henrique", "Luiz Antônio", "João Ricardo", "Vitor Emanuel",
    "Pedro Augusto", "Arthur Vinícius", "Felipe Gabriel", "Diego Fernando", "Matheus Henrique"
];

const sobrenomesFicticios = [
    "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves",
    "Pereira", "Lima", "Gomes", "Costa", "Ribeiro", "Martins", "Carvalho",
    "Almeida", "Melo", "Nunes", "Araújo", "Barbosa", "Fernandes", "Sampaio",
    "Braga", "Palma", "Assis", "Mota", "José", "Pinto", "Cardoso",
    "Teixeira", "Dias", "Jesus", "Andrade", "Moreira", "Nascimento", "Marques",
    "Monteiro", "Mendes", "Freitas", "Correia", "Castro", "Campos", "Figueiredo",
    "Lopes", "Machado", "Gonçalves", "Vieira", "Dantas", "Leal", "Reis", "Rosa",
    "Pires", "Soares", "Viana", "Azevedo", "Sales", "Amaral", "Barros", "Borges",
    "Brito", "Cunha", "Esteves", "Farias", "Fonseca", "Fontes", "Franco", "Frota",
    "Furtado", "Guedes", "Guerra", "Lemos", "Lira", "Magalhães", "Maia", "Miranda",
    "Moura", "Neves", "Nobre", "Paiva", "Peixoto", "Pessoa", "Prado", "Ramos",
    "Rezende", "Rocha", "Siqueira", "Tavares", "Vasconcelos", "Xavier", "Zimmermann",
    "Aguiar", "Arruda", "Bastos", "Bezerra", "Camargo", "Coelho", "Drummond",
    "Duarte", "Fagundes", "Galvão", "Garcia", "Guimarães", "Maciel", "Moraes",
];


// --- FUNÇÕES AUXILIARES ---

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateName() {
    const nome = nomesFicticios[getRandomInt(0, nomesFicticios.length - 1)];
    const sobrenome = sobrenomesFicticios[getRandomInt(0, sobrenomesFicticios.length - 1)];
    return `${nome} ${sobrenome}`;
}

function generateAttributes(position) {
    const geral = getRandomInt(60, 88); 

    if (position === 'Goleiro') {
        return {
            geral: geral,
            salto: getRandomInt(geral - 5, geral + 5),
            manejo: getRandomInt(geral - 5, geral + 5),
            reposicao: getRandomInt(geral - 8, geral + 2),
            reflexos: getRandomInt(geral - 5, geral + 8),
            posicionamento: getRandomInt(geral - 5, geral + 5)
        };
    } else {
        const mainStatBoost = getRandomInt(5, 12);
        let ritmo = getRandomInt(geral - 10, geral + 5);
        let finalizacao = getRandomInt(geral - 10, geral + 5);
        let passe = getRandomInt(geral - 10, geral + 5);
        let drible = getRandomInt(geral - 10, geral + 5);
        let defesa = getRandomInt(geral - 10, geral + 5);
        let fisico = getRandomInt(geral - 10, geral + 5);

        if (position === 'Atacante') {
            finalizacao += mainStatBoost;
            ritmo += getRandomInt(0, 5);
        } else if (position === 'Meio-campista') {
            passe += mainStatBoost;
            drible += getRandomInt(0, 5);
        } else if (position === 'Defensor') {
            defesa += mainStatBoost;
            fisico += getRandomInt(0, 5);
        }

        const cap = (attr) => Math.min(99, Math.max(50, attr));

        return {
            geral: geral,
            ritmo: cap(ritmo),
            finalizacao: cap(finalizacao),
            passe: cap(passe),
            drible: cap(drible),
            defesa: cap(defesa),
            fisico: cap(fisico)
        };
    }
}

/**
 * Calcula o valor de mercado de um jogador
 */
function calculatePlayerValue(geral, age) {
    let baseValue = Math.pow(geral / 10, 3) * 10000; // Crescimento exponencial
    
    // Multiplicador de idade
    let ageMultiplier = 1.0;
    if (age < 21) {
        ageMultiplier = 2.0; // Muito jovem, alto potencial
    } else if (age < 25) {
        ageMultiplier = 1.5; // Jovem
    } else if (age < 30) {
        ageMultiplier = 1.0; // Auge
    } else if (age < 34) {
        ageMultiplier = 0.7; // Veterano
    } else {
        ageMultiplier = 0.3; // Perto da aposentadoria
    }
    
    let value = Math.floor((baseValue * ageMultiplier) / 1000) * 1000; // Arredonda para milhar
    return value < 50000 ? 50000 : value; // Valor mínimo de 50k
}

/**
 * NOVO: Calcula o salário semanal de um jogador
 * (Aproximadamente 0.5% do valor total)
 */
function calculateSalary(value) {
    const weeklySalary = Math.floor((value * 0.005) / 10) * 10; // 0.5% do valor, arredondado para dezena
    return weeklySalary < 100 ? 100 : weeklySalary; // Salário mínimo de 100
}


/**
 * Gera um jogador completo (ATUALIZADO)
 */
function generatePlayer(playerId, position) {
    const age = getRandomInt(18, 36);
    const attributes = generateAttributes(position);
    const value = calculatePlayerValue(attributes.geral, age);
    const salary = calculateSalary(value); // CALCULA O SALÁRIO

    return {
        player_id: playerId,
        name: generateName(),
        position: position,
        age: age,
        number: getRandomInt(1, 99),
        attributes: attributes,
        value: value, 
        salary: salary // ADICIONA O SALÁRIO
    };
}

// --- FUNÇÃO PRINCIPAL ---

function generateDatabase() {
    const database = [];
    let teamId = 1;
    let playerId = 1000; 

    console.log("Iniciando geração do banco de dados...");

    for (const teamName of timesSerieA_2025) {
        const team = {
            team_id: teamId,
            team_name: teamName,
            budget: getRandomInt(20, 100) * 1000000, 
            players: []
        };

        // Estrutura do elenco: 2 Goleiros, 7 Defensores, 8 Meio-campistas, 5 Atacantes = 22 jogadores
        for (let i = 0; i < 2; i++) {
            team.players.push(generatePlayer(playerId++, 'Goleiro'));
        }
        for (let i = 0; i < 7; i++) {
            team.players.push(generatePlayer(playerId++, 'Defensor'));
        }
        for (let i = 0; i < 8; i++) {
            team.players.push(generatePlayer(playerId++, 'Meio-campista'));
        }
        for (let i = 0; i < 5; i++) {
            team.players.push(generatePlayer(playerId++, 'Atacante'));
        }

        database.push(team);
        teamId++;
    }

    // Escreve o arquivo JSON
    try {
        fs.writeFileSync('database.json', JSON.stringify(database, null, 2), 'utf8');
        console.log('----------------------------------------------------');
        console.log('✅ Sucesso! O arquivo "database.json" foi criado.');
        console.log(`✅ Total de ${database.length} times e ${database.length * 22} jogadores gerados.`);
        console.log('----------------------------------------------------');
    } catch (err) {
        console.error('❌ Erro ao escrever o arquivo:', err);
    }
}

// Executa o script
generateDatabase();