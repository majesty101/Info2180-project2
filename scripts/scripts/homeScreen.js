window.onload = function() {
    var all = document.getElementById("allissue");
    var open = document.getElementById("openissue");
    var ticket = document.getElementById("ticket");
    var request = new XMLHttpRequest();
    all.style.backgroundColor = '#85C1E9';
    all.style.color = '#FFFFFF';


    request.open("GET","http://localhost/Info2180-project2/database/index.php?context=dashboard&filter=all",true);
    request.send();
    request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                console.log('im here'); 
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
                all.style.backgroundColor = '#85C1E9';
                all.style.color = '#FFFFFF';
                open.style.backgroundColor = '#FFFFFF';
                open.style.color = '#000000';
                ticket.style.backgroundColor = '#FFFFFF';
                ticket.style.color = '#000000';

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
                all.style.backgroundColor = '#FFFFFF';
                all.style.color = '#000000';
                open.style.backgroundColor = '#85C1E9';
                open.style.color = '#FFFFFF';
                ticket.style.backgroundColor = '#FFFFFF';
                ticket.style.color = '#000000';
  
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
                all.style.backgroundColor = '#FFFFFF';
                all.style.color = '#000000';
                open.style.backgroundColor = '#FFFFFF';
                open.style.color = '#000000';
                ticket.style.backgroundColor = '#85C1E9';
                ticket.style.color = '#FFFFFF';
  

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