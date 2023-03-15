// includes('../php');
$(document).ready(function() {
	$('#sub').click(function(e) {
		e.preventDefault();
   console.log("Called")
        var Name = $('#Name').val();
		var Password = $('#Password').val();
        var Email=$('#Email').val();
        var DOB=$('#DOB').val();
		var Phone=$('#Phone').val();
		$.ajax({
			url: 'http://localhost:3000/php/register.php',
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
                // alert("success")
			},
			error: function(response)
			{
				console.log(response)
			}

		});

	});
});



