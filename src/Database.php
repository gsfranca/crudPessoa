<?php
namespace App\Src;

use PDO;

class Database{
    private $host;
    private $db;
    private $user;
    private $pass;
    private $charset;
    private $dsn;
    private $pdo;
 
    public function __construct() {
        $this->host = 'localhost';
        $this->db   = 'bd_pessoa';
        $this->user = 'root';
        $this->pass = '';
        $this->charset = 'utf8mb4';
    }
 
    public function conecta() {
       
 
    $this->dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
   
    try {
        $pdo = new PDO($this->dsn, $this->user, $this->pass, $options);
        return $pdo;
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
   
  }
}
 

