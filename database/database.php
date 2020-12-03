<?php
session_start();
header("Access-Control-Allow-Origin: *");
$host = 'localhost';
$username = 'admin';
$password = 'password123';
$dbname = 'proposals';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$context = $_GET['context'];
if ($context == 'newUser'){
    $fname = $_GET['fname'];
    $lname = $_GET['lname'];
    $pass = $_GET['password'];
    $email = $_GET['email'];
    
    if(filter_var($fname,FILTER_SANITIZE_STRING) !=false || filter_var($lname,FILTER_SANITIZE_STRING) != false || filter_var($email,FILTER_SANITIZE_EMAIL) != false || $sanitizedPassword = filter_var($pass,FILTER_SANITIZE_STRING) != false){
    $sanitizedFName = filter_var($fname,FILTER_SANITIZE_STRING);
    $sanitizedLName = filter_var($lname,FILTER_SANITIZE_STRING);
    $sanitizedEmail = filter_var($email,FILTER_SANITIZE_EMAIL);
    $sanitizedPassword = filter_var($pass,FILTER_SANITIZE_STRING);
    $hashedPassword = password_hash($sanitizedPassword,PASSWORD_DEFAULT);

    $stmt = $conn -> query("INSERT INTO `users` (firstname,lastname,password,email) VALUES ('$sanitizedFName','$sanitizedLName','$hashedPassword','$sanitizedEmail')");
    echo("User Entered");
    }else{
        echo("An error has occured");
    }


}