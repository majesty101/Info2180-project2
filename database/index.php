<?php
include('config.php');
require_once('login.php');

$context = $_GET['context'];

// checks if user is logged in
if(isset($_SESSION['user'])){

    //adds new user to sql after data is sanitized 
if ($context == 'newUser'){
    $fname = $_GET['fname'];
    $lname = $_GET['lname'];
    $pass = $_GET['password'];
    $email = $_GET['email'];
    
    if(filter_var($fname,FILTER_SANITIZE_STRING) !=false || filter_var($lname,FILTER_SANITIZE_STRING) != false || filter_var($email,FILTER_SANITIZE_EMAIL) != false || filter_var($pass,FILTER_SANITIZE_STRING) != false){
    $sanitizedFName = filter_var($fname,FILTER_SANITIZE_STRING);
    $sanitizedLName = filter_var($lname,FILTER_SANITIZE_STRING);
    $sanitizedEmail = filter_var($email,FILTER_SANITIZE_EMAIL);
    $sanitizedPassword = filter_var($pass,FILTER_SANITIZE_STRING);
    $hashedPassword = password_hash($sanitizedPassword,PASSWORD_DEFAULT);

    $stmt = $conn -> query("INSERT INTO `users` (firstname,lastname,password,email) VALUES ('$sanitizedFName','$sanitizedLName','$hashedPassword','$sanitizedEmail')");
    echo("User Entered");
    // something goes wrong with date entered by user
    }else{
        echo("An error has occured");
    }
}
// adds new issue to table after data is sanitized 
if($context = 'createIssue'){
    $title = $_GET['title'];
    $description = $_GET['description'];
    $assigned = $_GET['assigned'];
    $type = $_GET['type'];
    $priority = $_GET['priority'];
    if(filter_var($title,FILTER_SANITIZE_STRING) !=false || filter_var($description,FILTER_SANITIZE_STRING) != false || filter_var($assigned,FILTER_SANITIZE_STRING) != false || $type = filter_var($type,FILTER_SANITIZE_STRING) != false || filter_var($priority,FILTER_SANITIZE_STRING) != false){
        $sanitizedTitle = filter_var($title,FILTER_SANITIZE_STRING);
        $sanitizedDescription = filter_var($description,FILTER_SANITIZE_STRING);
        $sanitizedassigned = filter_var($assigned,FILTER_SANITIZE_STRING);
        $sanitizedType = $type = filter_var($type,FILTER_SANITIZE_STRING);
        $sanitizedPriority = filter_var($priority,FILTER_SANITIZE_STRING);
        $userID = $_SESSION['user'];

        $stmt = $conn ->query("INSERT INTO  `issues` (title,description,type,priority,assigned_to,created_by) VALUES ($sanitizedTitle,$sanitizedDescription,$sanitizedType,$sanitizedPriority,$sanitizedassigned,$userID)");
        echo("issue created");
    }
}
if($context == 'dashboard'){
    //if the open filter is selected 
    if($_GET['filter'] == "open"){

    //if my tickets filter is selected
    }else if($_GET['filter'] == "mytickets"){

    // open filter is selected or page is first visited
    }else{
    $stmt = $conn ->query("SELECT * FROM `issues` title,type,status,assigned_to,created");
    $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    // returs a html table that contains the data requested via fileter
    createIssuesPage($results);

}

}
?>

<?php function createIssuePage($result){?>
    <table>
        <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Created</th>
        </tr>
        <?php foreach($result as $row):?>
            <tr>
                <th><?php $row['title']?></th>
                <th><?php $row['type']?></th>
                <th><?php $row['status']?></th>
                <th><?php $row['assigned_to']?></th>
                <th><?php $row['created']?></th>
            </tr>
            <?php endforeach?>
    </table>
        <?php } ?>
