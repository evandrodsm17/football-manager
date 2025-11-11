// 1. Importar os módulos necessários
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Vamos instalar isso também, é importante!

// 2. Criar o app Express e definir a porta
const app = express();
const PORT = 3000; // Você pode escolher outra porta se quiser

// 3. Carregar o banco de dados
const dbPath = path.join(__dirname, 'database.json');
let database = []; // Variável para guardar os dados em memória

try {
    const data = fs.readFileSync(dbPath, 'utf8');
    database = JSON.parse(data); // Converte o texto do JSON para um array de objetos
    console.log("✅ Banco de dados 'database.json' carregado com sucesso!");
} catch (err) {
    console.error("❌ Erro ao carregar o 'database.json'.", err);
    console.error("❌ Por favor, execute o 'gerar_dados.js' primeiro!");
    process.exit(1); // Encerra o servidor se não conseguir ler o DB
}

// 4. Configurar Middlewares
// Habilitar o CORS é essencial para que seu app (rodando em outra porta) 
// possa fazer requisições para esta API.
app.use(cors());
app.use(express.static('public')); // <-- ADICIONE ESTA LINHA
// 5. Criar os "Endpoints" (as rotas da API)

/*
 * Endpoint principal: GET /api/teams
 * Retorna a lista completa de todos os times.
 */
app.get('/api/teams', (req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    res.json(database); // Envia o banco de dados completo como resposta
});

/*
 * Endpoint de detalhe: GET /api/teams/:id
 * Retorna um time específico pelo seu 'team_id'.
 */
app.get('/api/teams/:id', (req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);

    // Pega o ID da URL e converte para número
    const teamId = parseInt(req.params.id); 
    
    // Procura o time no nosso array 'database'
    const team = database.find(t => t.team_id === teamId);

    if (team) {
        res.json(team); // Envia o time encontrado
    } else {
        // Se não encontrar, envia um erro 404 (Not Found)
        res.status(404).json({ error: "Time não encontrado" });
    }
});

/*
 * Endpoint de detalhe do jogador: GET /api/teams/:teamId/players/:playerId
 * Retorna um jogador específico de um time específico.
 */
app.get('/api/teams/:teamId/players/:playerId', (req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    
    const teamId = parseInt(req.params.teamId);
    const playerId = parseInt(req.params.playerId);
    
    const team = database.find(t => t.team_id === teamId);
    
    if (team) {
        const player = team.players.find(p => p.player_id === playerId);
        if (player) {
            res.json(player); // Envia o jogador encontrado
        } else {
            res.status(404).json({ error: "Jogador não encontrado nesse time" });
        }
    } else {
        res.status(404).json({ error: "Time não encontrado" });
    }
});


// 6. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor da API rodando em http://localhost:${PORT}`);
    console.log("----------------------------------------------------");
    console.log("Endpoints disponíveis:");
    console.log(`  [GET] http://localhost:${PORT}/api/teams`);
    console.log(`  [GET] http://localhost:${PORT}/api/teams/1 (exemplo)`);
    console.log(`  [GET] http://localhost:${PORT}/api/teams/1/players/1000 (exemplo)`);
    console.log("----------------------------------------------------");
});