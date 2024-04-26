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

-- Tabela Registro de Acesso
CREATE TABLE RegistroAcesso (
    registro_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuario(usuario_id),
    data_acesso TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sucesso BOOLEAN NOT NULL,
    endereco_ip VARCHAR(50) NOT NULL
);


-- ADICIONANDO DADOS NO CURSO --


-- MODELO ENTIDADE RELACIONAMENTO --
Entidade: Usuário
ID do Usuário (PK)
Nome de Usuário
Email
Senha

Entidade: Sessão
ID da Sessão (PK)
ID do Usuário (FK)
Data e Hora do Login
Data e Hora do Logout (pode ser NULL se a sessão estiver ativa)

Entidade: Token
ID do Token (PK)
ID do Usuário (FK)
Token de Autenticação
Data de Expiração do Token

Entidade: Registro de Acesso
ID do Registro (PK)
ID do Usuário (FK)
Data e Hora do Acesso
Sucesso (booleano, indicando se o acesso foi bem-sucedido ou não)
Endereço IP do Acesso