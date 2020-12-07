window.onload = function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let button = document.getElementById('submit');
    let httpRequest = new XMLHttpRequest();

    button.addEventListener('click',function(event){
        event.preventDefault();
        let user = username.value;
        let pass = password.value;
        httpRequest.open('GET','http://localhost/Info2180-project2/database/login.php?user=' + user + "&pass=" + pass);
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4 && httpRequest.status == 200){
                if(httpRequest.responseText == "redirect" ){
                    window.location = 'homeScreen.html';
                }else{
                    alert(httpRequest.responseText);
                }
            }
        }
    })
}