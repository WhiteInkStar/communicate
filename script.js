function downlod() {
    var x, text;
    x = document.getElementById("chat").value;
    var z, text;
    z = document.getElementById("name").value;
    var y, text;
    var y = localStorage.getItem("hi");
    var time,text;
    var time=Date();  
    localStorage.setItem("hi", time+"——"+z+":"+x+"<br>"+y);
    var history = localStorage.getItem("hi");
    document.getElementById("pen").innerHTML = history;
}
function print() {
    var history = localStorage.getItem("hi");
    document.getElementById("pen").innerHTML = history;
}
