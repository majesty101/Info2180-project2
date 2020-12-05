window.onload = function() {
    var newissue = document.getElementById("issue");
    var all = document.getElementById("allissue");
    var open = document.getElementById("openissue");
    var ticket = document.getElementById("ticket");
    var request = new XMLHttpRequest();

    request.open("GET","http://localhost:8080/database.php?context=dashboard&filter=all",true);
        request.onreadystatechange = function() {
        if (this.DONE && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    }
    request.send();

    all.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost:8080/database.php?context=dashboard&filter=all",true);
        request.onreadystatechange = function() {
            if (this.DONE && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            } 
        }
        request.send();
    });

    open.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost:8080/database.php?context=dashboard&filter=open",true);
        request.onreadystatechange = function() {
            if (this.DONE && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        request.send();
    });

    ticket.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost:8080/database.php?context=dashboard&filter=myticket",true);
        request.onreadystatechange = function() {
            if (this.DONE && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        }
        request.send();
    });

}