function logout()
{
    localStorage.removeItem('uid');
    window.location.replace("https://guvi.rido.live");
}
function route()
{
    if(localStorage.getItem('uid')===undefined || localStorage.getItem('uid')==='')
    {
        window.location.replace("https://guvi.rido.live");
    }
    else
    {
        const uid=localStorage.getItem('uid');
        $.ajax({
			url: 'https://server-93j0.onrender.com/profile',
			type: 'POST',
			dataType:"json",
			data:{
				email:uid
			},
			success: function(response) {
				console.log(response)
                $('#userName').html(response.name);
                $('#Name').html(response.name);
                $('#email').html(response.email);  
                $('#phone').html(response.phone);  
                $('#DOB').html(response.DOB.substring(0,10));
                $('#guviid').html(response.id);
                console.log("From :"+response.from);
			},
			error: function(response)
			{
				alert("Something went wrong in front end");
			}

		});
        document.getElementById('hideboard').style.display="none";
    }
}
$(document).ready(function() {
	$('#upd').submit(function(e) {
		e.preventDefault();
        var Name = $('#newName').val();
        var DOB=$('#newDOB').val();
		var Phone=$('#newPhone').val();
        var Email=localStorage.getItem('uid');
		$.ajax({
			url: 'https://server-93j0.onrender.com/update',
			type: 'POST',
			dataType:"json",
			data:{
				Name: Name,
				Email:Email,
				DOB:DOB,
				Phone:Phone
			},
			success: function(response) {
                console.log("Success");
                location.reload();
			},
			error: function(response)
			{
				alert("Something went wrong in front end");
			}

		});

	});
});

function display()
{
    document.getElementById('hideboard').style.display="block";
}
function clo()
{
    document.getElementById('hideboard').style.display="none";
}




