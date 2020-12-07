<?php
session_start();
include('config.php');
include('login.php');



$context = $_GET['context'];
$user = (int)$_SESSION['user'];
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
if($context == 'createIssue'){
    $title = $_GET['title'];
    $description = $_GET['description'];
    $assigned = $_GET['assigned'];
    $type = $_GET['type'];
    $priority = $_GET['priority'];
    if(filter_var($title,FILTER_SANITIZE_STRING) !=false || filter_var($description,FILTER_SANITIZE_STRING) != false || filter_var($assigned,FILTER_SANITIZE_STRING) != false || $type = filter_var($type,FILTER_SANITIZE_STRING) != false || filter_var($priority,FILTER_SANITIZE_STRING) != false){
        $sanitizedTitle = filter_var($title,FILTER_SANITIZE_STRING);
        $sanitizedDescription = filter_var($description,FILTER_SANITIZE_STRING);
        $sanitizedassigned = (int)filter_var($assigned,FILTER_SANITIZE_STRING);
        $sanitizedType = $type = filter_var($type,FILTER_SANITIZE_STRING);
        $sanitizedPriority = filter_var($priority,FILTER_SANITIZE_STRING);
        $userID = (int)$_SESSION['user'];

        $stmt = $conn ->query("INSERT INTO `issues` (title,description,type,priority,assigned_to,created_by) VALUES ('$sanitizedTitle','$sanitizedDescription','$sanitizedType','$sanitizedPriority','$sanitizedassigned','$userID')");
        echo("Issue Created");
    }
}
if($context == 'dashboard'){
    //if the open filter is selected 
    if($_GET['filter'] == "open"){
        $stmt = $conn ->query("SELECT * FROM `issues` WHERE status = 'Open'");
        $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    //if my tickets filter is selected
    }else if($_GET['filter'] == "myticket"){
        $stmt = $conn ->query("SELECT * FROM `issues` WHERE assigned_to = '$user'");
        $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    // open filter is selected or page is first visited
    }else{
        $stmt = $conn ->query("SELECT * FROM `issues`");
        $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    // returs a html table that contains the data requested via fileter
    createIssuesPage($results);

}

if ($context == 'getNames'){
    $stmt = $conn -> query("SELECT id,firstname FROM `users`");
    $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    createAssighnments($results);
}
if($context == 'details'){
    $id = $_GET['id'];
    $sanitizedID = filter_var($id,FILTER_SANITIZE_NUMBER_INT);
    $stmt = $conn -> query("SELECT * FROM `issues` WHERE id = '$id'");
    $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($results[0]));
}

if($context == 'setStatus'){
    $status = $_GET['status'];
    $id =$_GET['id'];

    if($status == 'inProgress'){
        $stmt = $conn -> query("UPDATE `issues` SET status='In Progress' WHERE id = '$id'");
        exit();
    }else{
        $stmt = $conn -> query("UPDATE `issues` SET status='Closed' WHERE id = '$id'");
        exit();
    }
}

}else{
    echo("no Session detected");
}
?>

<?php function createIssuesPage($result){?>
    <table>
        <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Created</th>
        </tr>
        <?php foreach($result as $row):?>
            <tr id="row" data-issueid=<?=$row['id']?>>
                <th><?=$row['title']?></th>
                <th><?=$row['type']?></th>
                <?php if ($row['status'] == 'Open') { ?>
                <th style="background-color: green" id='open'><?=$row['status']?></th>
                
                <?php }else if($row['status'] == 'Closed') { ?>
                <th style="background-color: red" id='closed'><?=$row['status']?></th>

                <?php }else if($row['status'] == 'In Progress') { ?>
                <th style="background-color: yellow" id='inprogress'><?=$row['status']?></th>
                <?php } ?>

                <th><?=$row['assigned_to']?></th>
                <th><?=$row['created']?></th>
            </tr>
            <?php endforeach?>
    </table>
        <?php } ?>

<?php function createAssighnments($results){?> 
    <select name="assign" id="assignstuff">
    <?php foreach ($results as $row):?>
        <option value=<?=$row['id']?> ><?=$row['firstname']?> </option>
    <?php endforeach; ?>
    </select>

<?php } ?>



