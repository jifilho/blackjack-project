-- CRIANDO AS TABELAS --
-- Tabela Usuário
CREATE TABLE Usuario (
    usuario_id SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

-- Tabela Sessão
CREATE TABLE Sessao (
    sessao_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuario(usuario_id),
    data_login TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_logout TIMESTAMP
);

-- Tabela Token
CREATE TABLE Token (
    token_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuario(usuario_id),
    token_auth VARCHAR(255) UNIQUE NOT NULL,
    data_expiracao TIMESTAMP NOT NULL
);

-- Tabela Jogos
CREATE TABLE jogos (
  jogo_id SERIAL PRIMARY KEY,
    nome_jogo VARCHAR(255) UNIQUE NOT NULL,
    ano_criacao int,
    empresa_jogo VARCHAR(255)
 );


-- ADICIONANDO DADOS NO CURSO --
-- Inserindo dados na tabela Usuario
 INSERT INTO Usuario (nome_usuario, email, senha)
VALUES 
('João Silva', 'joao.silva@email.com', 'senha123'),
('Maria Santos', 'maria.santos@email.com', 'senha456'),
('Pedro Costa', 'pedro.costa@email.com', 'senha789'),
('Ana Oliveira', 'ana.oliveira@email.com', 'senha321'),
('Carlos Lima', 'carlos.lima@email.com', 'senha654'),
('Mariana Pereira', 'mariana.pereira@email.com', 'senha987');

-- Inserindo dados na tabela Sessao
INSERT INTO Sessao (usuario_id, data_logout)
VALUES 
(1, '2024-04-26 22:00:00'),
(2, '2024-04-27 22:00:00'),
(3, '2024-04-28 22:00:00'),
(4, '2024-04-29 22:00:00'),
(5, '2024-04-30 22:00:00'),
(6, '2024-05-01 22:00:00');

-- Inserindo dados na tabela Token
INSERT INTO Token (usuario_id, token_auth, data_expiracao)
VALUES 
(1, 'abc123', '2024-05-26 00:00:00'),
(2, 'def456', '2024-05-27 00:00:00'),
(3, 'ghi789', '2024-05-28 00:00:00'),
(4, 'jkl012', '2024-05-29 00:00:00'),
(5, 'mno345', '2024-05-30 00:00:00'),
(6, 'pqr678', '2024-05-31 00:00:00');

-- Inserindo dados na tabela jogos
INSERT INTO jogos (jogo_id, nome_jogo, ano_criacao, empresa_jogo)
VALUES 
(1, 'blackjack', 1970,'pokerstars'),
(2, 'poker', 1999,'pokerstars'),
(3, 'tigrinho', 2020,'pragmatic'),
(4, 'solitário', 1989,'Microsoft'),
(5, 'xadrez', 1500,'Desconhecido'),
(6, 'Sudoku', 2014,'Howard Garns');


SELECT S.sessao_id, U.nome_usuario, S.data_login, S.data_logout
FROM Sessao AS S
JOIN Usuario AS U ON S.usuario_id = U.usuario_id;

SELECT TOKEN.token_id, U.email, TOKEN.token_auth, TOKEN.data_expiracao, S.data_login
FROM Token
JOIN Usuario AS U ON TOKEN.usuario_id = U.usuario_id
JOIN Sessao AS S ON TOKEN.usuario_id = S.usuario_id

select * FROM jogos;