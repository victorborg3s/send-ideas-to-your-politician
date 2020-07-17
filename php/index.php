<?php

if ( extension_loaded('pdo_mysql') ) {
  require_once __DIR__ . '/config.php';
}

class API {
  /*
  function select()
  {
    $db = new Connect();
    $ideas = array();
    $data = $db->prepare('select * from idea order by id');
    $data->execute();
    while ($OutputData = $data->fetch(PDO::FETCH_ASSOC))
    {
      $ideas[$OutputData['id']] = array(
        'id' => $OutputData['id'],
        'suggestioner_name' => $OutputData['suggestioner_name'],
        'suggestion' => $OutputData['suggestion'],
      );
    }
  return json_encode($ideas);
  }
  */

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
header('Access-Control-Allow-Origin: http://localhost:3000, http://laerciojunior.com/');
header('Access-Control-Allow-Headers: Accept, Content-Type');

try {
  echo $API->insert($_POST);
} catch (Exception $e) {
  http_response_code(500);
  echo $e->getMessage();
}

?>