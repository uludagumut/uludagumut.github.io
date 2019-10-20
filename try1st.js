const languages = [
    { value: "en" , name: "English language" },
    { value : "ru" , name : "Русский" },
    { value : "tr" , name : "Türkçe" },
    { value : "ar" , name : "Arapca eklenecek." }

];
console.log(languages[0].value + ' ' + languages[0].name);

var x = 0;
var result = "";
for (; x < languages.length; ) {
    result += languages[x].value +  "<br>";
    x++;
    result = document.getElementById("lastdemo").innerHTML ;
} 
console.log(result);







function languageswitcher() {
    var language = document.getElementById("languageswitcher").value;
    const data = 
    language === "en" ? console.log("English language") : 
    language === "ru" ? console.log("Russian language") : 
    language === "tr" ? console.log("Russian language") : 
    console.log("Non-selected");
}