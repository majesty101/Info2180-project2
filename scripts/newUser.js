window.onload = function(){
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let submit = document.getElementById('searchbtn');
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let httpRequest = new XMLHttpRequest();


    submit.addEventListener('click',function(event){
        event.preventDefault();
        let firstname = fname.value;
        let lastname = lname.value;
        let pass = password.value;
        let mail = email.value;
        
        if(passwordRegex.test(pass == false)){
            alert("Password must contain one letter, one number, one capital letter and consist of 8 characters");
        }else{
            if(emailRegex.test(mail == false)){
                alert("Please enter a vaild email");
            }else{

                httpRequest.open("GET","http://localhost/Info2180-project2/database/index.php?context=newUser&fname=" + firstname + "&lname=" + lastname + "&password=" + pass + "&email=" + mail);
                httpRequest.send();
                httpRequest.onreadystatechange = function(){
                    if (httpRequest.readyState == 4 && httpRequest.status == 200){

                        alert(httpRequest.responseText);
                    }
                }
            }
            
        }
    })
}