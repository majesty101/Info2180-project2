window.onload = function() {
    var all = document.getElementById("allissue");
    var open = document.getElementById("openissue");
    var ticket = document.getElementById("ticket");
    var request = new XMLHttpRequest();


    request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=all",true);
    request.send();
    request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
            viewDetails();

        }
    }

    all.addEventListener("click", function (e) {
        e.preventDefault();
        request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=all",true);
        request.send();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
                viewDetails();

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
                viewDetails();
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
                viewDetails();
            }
        }

    });

}


function viewDetails() {
    let tableRow = document.querySelectorAll('#row');
    let url = 'http://localhost/Info2180-project2/detailedIssue.html';
    for(let i=0;i<tableRow.length;i++){
        let row = tableRow[i];
        row.addEventListener('click',function(){
            url = url + '?' + row.dataset.issueid;
            document.location.href = url;

        })
    }
}