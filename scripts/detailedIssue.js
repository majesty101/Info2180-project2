window.onload = function(){
    let url = document.location.href;
    let inProgress = document.getElementById("markinprog");
    let markClosed = document.getElementById("markclosed");
    let httpRequest = new XMLHttpRequest();
    params = url.split('?')[1].split('&');

    httpRequest.open('GET','http://localhost/Info2180-project2/database/index.php?context=details&id='+params[0]);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            let array = JSON.parse(httpRequest.responseText);
            let title = document.getElementById("title");
            let body = document.getElementById("para");
            let issueNumber = document.getElementById('issueNum');
            let dates = document.getElementById('dates');
            let issue = document.getElementById('issue');
            title.innerHTML = array['title'];
            body.innerHTML = array['description'];
            issueNumber.innerHTML = "Issue# " + array['id'];
            dates.innerHTML = "Issue is created on" + array['created'] + "<br>" + "Issues was last updated on " + array['updated'];
            issue.innerHTML = "Assigned To: " + array['assigned_to'] + "<br> Type: " + array['type'] + "<br> Priority:" + array['priority'] + "<br>Status: " + array['status'];

        }
    }

    inProgress.addEventListener('click',function(){
        httpRequest = new XMLHttpRequest;
        httpRequest.open('GET','http://localhost/Info2180-project2/database/index.php?context=setStatus&status=inProgress&id=' + params[0]);
        httpRequest.send();
        location.reload();
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            alert("Issue marked in progress");
            location.reload();

        }
    })

    markClosed.addEventListener('click',function(){
        httpRequest = new XMLHttpRequest;
        httpRequest.open('GET','http://localhost/Info2180-project2/database/index.php?context=setStatus&status=closed&id=' + params[0]);
        httpRequest.send();
        location.reload();
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            alert("Issue marked closed");
            

        }  
    })

} 