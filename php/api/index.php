<?php

require_once './config.php';

class API {
  function insert($data)
  {
    $db = new Connect();
    $stmt = $db->prepare('
      INSERT INTO idea (
        nome,
        whatsapp,
        email,
        bairro,
        instrucao,
        problema,
        prioridade,
        eixo,
        sugestao
      ) VALUES(
        :nome,
        :whatsapp,
        :email,
        :bairro,
        :instrucao,
        :problema,
        :prioridade,
        :eixo,
        :sugestao
      )
    ');
    $stmt->execute(array(
      ':nome' => $data['nome'],
      ':whatsapp' => $data['whatsapp'],
      ':email' => $data['email'],
      ':bairro' => $data['bairro'],
      ':instrucao' => $data['instrucao'],
      ':problema' => $data['problema'],
      ':prioridade' => $data['prioridade'],
      ':eixo' => $data['eixo'],
      ':sugestao' => $data['sugestao'],
    ));
    return json_encode($data);
  }
}

$API = new API;
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Accept, Content-Type');

try {
  echo $API->insert($_POST);
} catch (Exception $e) {
  http_response_code(500);
  echo $e->getMessage();
}

?>