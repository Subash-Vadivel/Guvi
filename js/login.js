$(document).ready(function() {
	$('#subi').submit(function(e) {
		e.preventDefault();
        console.log("Logging ...")
		var Password = $('#lPassword').val();
        var Email=$('#lEmail').val();
		$.ajax({
			url: 'https://guvi03.000webhostapp.com/login.php',
			type: 'POST',
			dataType:"json",
			data:{
				Password: Password,
				Email:Email
			},
			success: function(response) {
                console.log(response.status);
                if(response.status==="emailerror")
                {
                    $('#Help').html('Email and Password not Matched');
                }
                else if(response.status==='success')
                {
                    const val=response.uid;
					localStorage.setItem('uid',val);
					window.location.replace("https://guvi05.netlify.app/profile.html");
                }
                else
                {
                    console.log(response.status);
                }

			},
			error: function(response)
			{
				console.log("Something went wrong in front end");
			}

		});

	});
});



