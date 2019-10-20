function languageswitcher() {
    
    var x = document.getElementById("languageswitcher").value;
    
    if ( x === "en"){
        console.log("English language");

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                var obj13 = myObj.name ;
                document.getElementById("demo").innerHTML = myObj.name + " "+ myObj.logo +"  | deneme : " + obj13;
            }
        };
        xmlhttp.open("GET", "englishlanguage.json", true);
        xmlhttp.send();

    }else if ( x === "ru") {
        console.log("Russian language");
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("demo").innerHTML = myObj.name + myObj.logo;
            }
        };
        xmlhttp.open("GET", "russianlanguage.json", true);
        xmlhttp.send();

    }else if ( x === "tr") {
        console.log("Turkish language");
    }else {
        console.log("Non-selected");
    }
    //document.getElementById('languageswitcher').selectedIndex = x;
}

function mainmenu() {
    var x = document.getElementById('mainmenu');
    var y = document.getElementById('mainmenu').value;
    console.log(y + " deneme basarili");
    document.getElementById("demo").innerHTML = document.getElementById("mainmenu").value;
    
    
    document.getElementById("mainmenu").value = "";
}