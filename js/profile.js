function logout()
{
    localStorage.removeItem('uid');
    window.location.replace("http://127.0.0.1:5500/index.html");
}
function route()
{
    if(localStorage.getItem('uid')===undefined || localStorage.getItem('uid')==='')
    {
        window.location.replace("http://127.0.0.1:5500/index.html");
    }
}