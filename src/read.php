<?php
require_once 'Database.php'; // Inclua o arquivo Database.php para acessar a classe Database
require_once 'Cliente.php';
// Instancie a classe Database para obter a conexão PDO
$database = new App\Src\Database();
$cliente = new App\Src\Cliente($database->conecta()); // Passe a conexão PDO para o construtor do Cliente
$clientes = $cliente->listar(); // Chame diretamente o método listar() do objeto $cliente

// Converta os resultados em JSON para envio ao JavaScript
header('Content-Type: application/json');
echo json_encode($clientes);
?>
