<?php      

    include('config.php');  
    if(!isset($_SESSION)){
    session_start();
    $username = $_GET['user'];  
    $password = $_GET['pass'];  
      
        $username = filter_var($username,FILTER_SANITIZE_EMAIL);
        $password = filter_var($password,FILTER_SANITIZE_STRING);  
        $stmt  = $conn -> query("SELECT * FROM `users` WHERE  email = '$username'");  
        $result = $stmt -> fetchAll(PDO::FETCH_ASSOC); 

        if (count($result) != 0){
            $row = $result[0];
            if(password_verify($password,$row['password'])){

                $_SESSION['user'] = $row['id'];
                echo('redirect');
        }else{
            echo('Incorrect Password');
        }
    }else{
        echo('Incorrect Username');
    }
   
}else{

}
