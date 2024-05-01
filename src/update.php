<?php

require __DIR__.'/../vendor/autoload.php';

use App\Src\Database;
use App\Src\Cliente;

$id = $_POST["id_pessoa"];
$nome = $_POST["nome_pessoa"];
$email = $_POST["email_pessoa"];
$dtNascimento = $_POST["dt-nascimento_pessoa"];

$dados = ['id_pessoa'=>$id, 'nome_pessoa'=>$nome, 'email_pessoa'=>$email, 'dt-nascimento_pessoa'=>$dtNascimento];

//Database
$create  = new Database();
$pdo = $create->conecta(); //Conectando

//Cliente
$cliente = new Cliente($pdo);
$cliente->alterar($dados); //Inserindo