// includes('../php');
$(document).ready(function() {
	$('#sub').submit(function(e) {
		e.preventDefault();
        var Name = $('#Name').val();
		var Password = $('#Password').val();
        var Email=$('#Email').val();
        var DOB=$('#DOB').val();
		var Phone=$('#Phone').val();
		$.ajax({
			url: 'http://localhost:5000/register',
			type: 'POST',
			dataType:"json",
			data:{
				Name: Name,
				Password: Password,
				Email:Email,
				DOB:DOB,
				Phone:Phone
			},
			success: function(response) {
                console.log(response);
				if(Object.keys(response.length>1))
				{
					const val=response.uid;
					localStorage.setItem('uid',val);
					window.location.replace("https://guvi05.netlify.app/profile.html");
				}
				else
				{
					alert("User Already Exist");
				}
                // alert("success")

			},
			error: function(response)
			{
				alert("Something went wrong in front end");
			}

		});

	});
});



