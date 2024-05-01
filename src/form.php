<?php

require __DIR__.'/../vendor/autoload.php';

use App\Src\Database;
use App\Src\Cliente;

echo $_POST["submit"];
$id = $_POST["id"];
echo $id;

if ($_POST["submit"] == "deletar") {

    //Database
    $create  = new Database();
    $pdo = $create->conecta(); //Conectando

    //Cliente
    $cliente = new Cliente($pdo);
    $cliente->excluir($id); //Excluindo
    
} else if ($_POST["submit"] == "editar") {

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $dtNascimento = $_POST["data_nascimento"];

    $dados = ['id'=>$id, 'nome'=>$nome, 'email'=>$email, 'data_nascimento'=>$dtNascimento];

    echo $id, $nome, $email, $dtNascimento;

    //Database
    $create  = new Database();
    $pdo = $create->conecta(); //Conectando

    //Cliente
    $cliente = new Cliente($pdo);
    $cliente->alterar($dados); //Inserindo
}