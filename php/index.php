<?php
require_once __DIR__ . '/config.php';
class API {
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
}

$API = new API;
header('Content-Type: application/json');
echo $API->select();

?>