window.onload = function() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var assign = document.getElementById("assignstuff");
    var bugs = document.getElementById("bugstuff");
    var priority = document.getElementById("prioritystuff");
    var btn = document.getElementById("searchbtn");

    btn.addEventListener("click", function() {
        var request = new XMLHttpRequest();
        request.open("GET","http://localhost:8080/database.php?context=createIssue&title="+title.value+"&description="+description.value+"&assigned="+assign.value+"&type="+bugs.value+"&priority="+priority.value,true);
        request.onreadystatechange = function() {
            if (this.DONE && this.status == 200) {
                document.getElementsByTagName("h2").item(0).innerHTML = request.responseText;
            }
        }
    });
}