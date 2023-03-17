function route()
{
    console.log(localStorage.getItem('uid'));
    if(localStorage.getItem('uid')===null  || localStorage.getItem('uid')===undefined || localStorage.getItem('uid')==='')
    {
        window.location.replace("https://guvi.rido.live/login.html");
    }
    else
    {
        window.location.replace("https://guvi.rido.live/profile.html");
    }
}