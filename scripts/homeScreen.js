window.onload = function() {
    var newissue = document.getElementById("issue");
    var all = document.getElementById("allissue");
    var open = document.getElementById("openissue");
    var ticket = document.getElementById("ticket");
    var request = new XMLHttpRequest();

    request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=all",true);
    request.send();
    request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    }

    all.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=all",true);
        request.send();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            } 
        }

    });

    open.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=open",true);
        request.send();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }

    });

    ticket.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=myticket",true);
        request.send();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
        }

    });

}