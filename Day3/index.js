

//object
const student={name:"jam ", Age=10};
document.getElementById("valobject").innerHTML=student.name+""+student.Age;
function add(){
    var number =1;
    var numbertwo=4;
    var sum=number+numbertwo;
    var mult=number*numbertwo;
    var name="james";

var mult=number*numbertwo;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("newno").innerHTML="Arthur";

document.getElementById("mult").innerHTML=mult;
console.log("sum");
console.log("mult");
}
function displaynewobj(){
    
    document.getElementById("valobject").innerHTML=this.student.name+""+this.student.Age;
}

function checkeven(){
    var picknum=document.getElementById("readnum").value;
    if (picknum%2 ==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}