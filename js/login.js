function login()
{
    if(window.XMLHttpRequest)
    {
        a=new XMLHttpRequest();
    }
    else
    {
        a=new ActiveXObject("Microsoft.XMLHTTP");
    }
    a.onreadystatechange=function()
    {
        if(a.readyState==4 && a.status==200)
        {
            alert(a.responseText);
        }
    }
    var email=document.getElementById("Email").value;
    var password=document.getElementById("Password").value;
    var url="login.php";
    var val="Email="+email+"&Password="+password;
    a.post("POST",url,true);
    a.setRequestHeader("content-type","application/x-www-form-urlencoded");
    a.setRequestHeader("content-length",val.length);
    a.setRequestHeader("connection","close");
    a.send(val);
}