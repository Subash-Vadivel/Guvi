function route()
{
    console.log(localStorage.getItem('uid'));
    if(localStorage.getItem('uid')===null  || localStorage.getItem('uid')===undefined || localStorage.getItem('uid')==='')
    {
        window.location.replace("https://guvi05.netlify.app/login.html");
    }
    else
    {
        window.location.replace("https://guvi05.netlify.app/profile.html");
    }
}