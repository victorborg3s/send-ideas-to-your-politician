CREATE TABLE idea (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(256),
  whatsapp VARCHAR(32),
  email VARCHAR(256),
  bairro VARCHAR(256),
  instrucao VARCHAR(256),
  problema VARCHAR(256),
  prioridade VARCHAR(256),
  eixo VARCHAR(256),
  sugestao TEXT
);
