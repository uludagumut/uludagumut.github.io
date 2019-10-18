function languageswitcher() {
    
    var x = document.getElementById("languageswitcher").value;
    
    if ( x === "en"){
        console.log("English language");
    }else if ( x === "ru") {
        console.log("Russian language");
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












function englishlanguagesection(){}
/* function englishmainmenu() {
    var mainmenu = '<div class="navbar"><a href="#home">Home</a><a href="#news">News</a><a href="#contact">Contact</a></div>';
    document.write(mainmenu);
    };
     */

//document.getElementById("navbar").innerHTML = englishmainmenu();

/* 

    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
    </div>


*/