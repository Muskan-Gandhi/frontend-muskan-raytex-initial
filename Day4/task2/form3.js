function validate(){
    var num=document.myform.num.value;
    var Username=document.myform.valuel;
    //var num=document.getElementById("num");
    if (isNaN(num)){
      document.getElementById("numloc").innerHTML="Enter Numeric value only";
      return false;
    }else{
      return true;
      }

    if(Username.length<5 || Username.length>15){
        document.getElementById("Username").innerHTML="Enter username greater than 5 of less than 16";
        return false;
    }else{
        return true;
    }
    }
