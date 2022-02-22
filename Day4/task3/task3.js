function submit()
{ 
    var email=document.getElementById("email").value;
    var password=document.getElementById("inputPassword").value;
    var address=document.getElementById("address").value;
        // Get the checkbox
        var checkBox = document.getElementById("check");
        // Get the output text
        document.getElementById("email").innerHTML=email;
        // If the checkbox is checked, display the output text
        if (check.checked == true){
          text.style.display = "block";
          console.log("checked");
        } else {
          text.style.display = "none";
        }
      
}