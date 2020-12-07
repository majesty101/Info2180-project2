<?php
 

header("Access-Control-Allow-Origin: *");
$host = 'localhost';
$username = 'admin';
$password = 'password123';
$dbname = 'proposals';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
?>