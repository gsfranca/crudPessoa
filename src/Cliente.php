<?php

namespace App\Src;

use PDO;

class Cliente{
    private $pdo;
public function __construct($pdo) {
    $this->pdo = $pdo;
}
public function insere($data){
    $stmt = $this->pdo->prepare("CALL inserir_usuario(?,?,?)");
    $stmt->bindParam(1, $data['nome_pessoa'], PDO::PARAM_STR);
    $stmt->bindParam(2, $data['email_pessoa'], PDO::PARAM_STR);
    $stmt->bindParam(3, $data['dt-nascimento_pessoa'], PDO::PARAM_STR);
 
    try {
        if ($stmt->execute()) {
            echo "Cliente adicionado com sucesso!";
        }
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
  }
  
  public function excluir($data){
    $stmt = $this->pdo->prepare("CALL excluir_usuario(?)");
    $stmt->bindParam(1, $data, PDO::PARAM_INT);
 
    try {
        if ($stmt->execute()) {
            echo "Cliente EXCLUIDO com sucesso!";
        }
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
  }

  public function listar(){
    $stmt = $this->pdo->prepare("CALL selecionar_usuarios");

    try {
        if ($stmt->execute()) {
            // Retorna os resultados da consulta
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}


  public function alterar($data){
    $stmt = $this->pdo->prepare("CALL atualizar_usuario(?,?,?,?)");
    $stmt->bindParam(1, $data['id'], PDO::PARAM_STR);
    $stmt->bindParam(2, $data['nome'], PDO::PARAM_STR);
    $stmt->bindParam(3, $data['email'], PDO::PARAM_STR);
    $stmt->bindParam(4, $data['data_nascimento'], PDO::PARAM_STR);
 
    try {
        if ($stmt->execute()) {
            echo "Status alterado com sucesso!";
        }
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
  }
}