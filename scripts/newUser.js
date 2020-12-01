window.onload = function(){
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let submit = document.getElementById('searchbtn');
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/;

    submit.addEventListener('click',function(event){
        event.preventDefault();
        let firstname = fname.value;
        let lastname = lname.value;
        let pass = password.value;
        let mail = email.value;
        
        if(regex.test(pass)){
            alert("Password accepted")
        }else{
            alert("Password must contain one letter, one number, one capital letter and consist of 8 characters");
        }
    })
}