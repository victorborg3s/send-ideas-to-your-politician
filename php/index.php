<?php
require_once __DIR__ . '/config.php';
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
        suggestioner_name,
        suggestion
      ) VALUES(
        :nome,
        :sugestao
      )
    ');
    $stmt->execute(array(
      ':nome' => $data['nome'],
      ':sugestao' => $data['sugestao'],
    ));
    return json_encode($data);
  }
}

$API = new API;
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Accept, Content-Type');

echo $API->insert(json_decode(file_get_contents('php://input'), true));

?>