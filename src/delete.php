<?php

require __DIR__.'/../vendor/autoload.php';

use App\Src\Database;
use App\Src\Cliente;

$id = $_POST["id"];

echo $id;

//Database
$create  = new Database();
$pdo = $create->conecta(); //Conectando

//Cliente
$cliente = new Cliente($pdo);
$cliente->excluir($id); //Excluindo


