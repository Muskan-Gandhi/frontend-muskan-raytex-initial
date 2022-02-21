

//object
var isPrime=true;

function check(){
    var picknum=document.getElementById("newno").value;
    for (var i = 2; i < picknum; i++) {
        if (picknum % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime== true){
        console.log(" prime");
    }
    else{
        console.log("not prime");
    }
}