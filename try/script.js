function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("demo").innerHTML = ''
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText)
            response.forEach(element => {
                if (element.state == "Telangana") {
                    document.getElementById("demo").innerHTML += element.name + '<br>';
                }
            });
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json", true);
    xhttp.send();
}