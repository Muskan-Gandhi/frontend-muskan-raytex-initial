function submit(){
    
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    console.log(fname);
    document.getElementById("firstname").innerHTML=fname;

    console.log(lname);
    console.log(email); 
}