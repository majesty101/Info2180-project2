<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password1234';
$dbname = 'proposals';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
