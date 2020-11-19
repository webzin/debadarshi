"use strict";
$(document).ready(function(){
 

	
$("#signout").click(function(){
localStorage.clear();
window.location.href = "login.html";
});
if (localStorage.ut == "D") {
$("#doc").show();
$("#pat").hide();

} 
if (localStorage.ut == "P") {
$("#doc").hide();
$("#pat").show();
}

//Book An Appiontment
$('#appiontment').validate({ // initialize the plugin
        rules: {
            service: {
                required: true,
            },
			 consultant: {
                required: true,
            },
			 aptdate: {
                required: true,
            }, 
			apttime: {
                required: true,
            },
			 
			
			issues: {
                required: true,
            } 
			 },
           
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth1.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){
				$("#apptbtn").val('Please wait................');
				$('#loader').hide();
				$("#apptbtn").prop('disabled', true);
				},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(2000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(2000).fadeOut();
				if(resp.value2=="S"){ 
				localStorage.aid=resp.value3;				
				window.location.href = "pay.html"; }
			 	if(resp.value2=="E"){
				$('#loader').hide();
				$("#apptbtn").prop('disabled', false);
				$("#apptbtn").val('BOOK NOW');
				$('#sucessMessage').delay(5000).fadeOut();
				$("#aptdate").addClass("error");
				$("#aptdate").focus();
				}
				}
				             
        });
	}

});


$('#register').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
            },
			email: {
                required: true,
				email: true,
            },
			gender: {
				required: true,
			},
			age: {
            required: true,
			number: true,
			max:100,
            },
			mstatus: {
				required: true,
			},
			height: {
				required: true,
			},
			height: {
				required: true,
			},
			address: {
				required: true,
			},
			city: {
				required: true,
			},
			state: {
				required: true,
			},
			country: {
				required: true,
			},
			zip: {
                required: true,
				number: true,
            },
			mobile: {
                required: true,
				number: true,
				minlength:9,
				maxlength:10,
            },
			pass: {
                required: true,
				 
            } 
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth1.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ 
				$('#spinner').show();
				$("#regid").val('Signing up Please wait......');
				$("#regid").prop('disabled', true);
			},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				if(resp.value2=="S"){ 
				window.location.href = "profile.html"; 
				localStorage.login="true";
				localStorage.name=resp.value3;
				localStorage.email=resp.value4;
				localStorage.addr=resp.value5;
				localStorage.city=resp.value6;
				localStorage.state=resp.value7;
				localStorage.cont=resp.value8;
				localStorage.zip=resp.value15;
				localStorage.ut=resp.value9;
				localStorage.uid=resp.value10;
				localStorage.mobile=resp.value11;
				localStorage.gender=resp.value12;
				localStorage.age=resp.value13;
				localStorage.mstatus=resp.value18;
				localStorage.height=resp.value16;
				localStorage.weight=resp.value17;
				localStorage.profile_pic=resp.value14;
				
				}
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$('#spinner').hide(5000);
				$("#regid").prop('disabled', false);
				$("#regid").val('Sign up');
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});


$('#fpass').validate({ // initialize the plugin
        rules: {
  			mobile: {
                required: true,
				number: true,
            } 
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth1.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ 
			$('#spinner').show();
			$("#forgotpass").val('Requesting Password......');
			$("#forgotpass").prop('disabled', true);
			},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(1000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				
				if(resp.value2=="S"){
					$('#sucessMessage').delay(5000).fadeOut();
					setTimeout(function(){ window.location.href= 'login.html';}, 5000);
					
					}
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#forgotpass").val('Request Password');
				$("#forgotpass").prop('disabled', false);
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});

 
$('#signin').validate({ // initialize the plugin
        rules: {
          
			mobile: {
                required: true,
				number: true,
            },
			pass: {
                required: true,
            } 
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth1.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ 
			$("#login").val('Loging you in................');
			},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(5000).fadeOut();
 				$("#login").val('Login');
				if(resp.value2=="S"){
				localStorage.login="true";
				localStorage.name=resp.value3;
				localStorage.email=resp.value4;
				localStorage.addr=resp.value5;
				localStorage.city=resp.value6;
				localStorage.state=resp.value7;
				localStorage.cont=resp.value8;
				localStorage.zip=resp.value15;
				localStorage.ut=resp.value9;
				localStorage.uid=resp.value10;
				localStorage.mobile=resp.value11;
				localStorage.gender=resp.value12;
				localStorage.age=resp.value13;
				localStorage.profile_pic=resp.value14;
				localStorage.height=resp.value16;
				localStorage.weight=resp.value17;
				localStorage.mstatus=resp.value18;
				}
				if(resp.value9=="P"){ window.location.href = "profile.html"; } 
				if(resp.value9=="D"){ window.location.href = "doctor_profile.html"; } 
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				
				}
				}
				             
        });
	}

});
// FileUpload the Process


$('#addimg').validate({


		rules: {
		comments: {
		required: true,
				},
		chalanfile: {
		required: true,
		 
				},
				},

		submitHandler: function(form) {

		var fd = new FormData(form);
		var files = $('#chalanfile')[0].files[0];
		fd.append('chalanfile',files);

			$.ajax({
			url: hosturl+"fileupload.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			beforeSend: function(){ 
			$("#addimgbtn").val('Uploading...... Please wait');
			 $("#addimgbtn").prop('disabled', true);
			  $('#spinner').show();
			},
			//data: $('#additem').serialize(),
				success: function(data, status) {
				var resp = $.parseJSON(data);
				
				// Add img element in <div id='preview'>
				$('#preview').append('<a href="'+resp.value1+'" target="_blank"><i class="fa fa-file"></i>'+resp.value2+'</a><br>');
				$("#addimg")[0].reset() 
				$("#addimgbtn").val('Upload Documents');
			 $("#addimgbtn").prop('disabled', false);
			  $('#spinner').hide();
				}            
			});
		}
		});



$('#updateimg').validate({

 
		submitHandler: function(form) {

		var fd = new FormData(form);
		var files = $('#file-input')[0].files[0];
		fd.append('chalanfile',files);

			$.ajax({
			url: hosturl+"profile_update.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			beforeSend: function(){ 
			$('#spinner').show();
			},
			//data: $('#additem').serialize(),
				success: function(data, status) {
			var resp = $.parseJSON(data);
			localStorage.profile_pic=resp.value2;
			$('#spinner').hide();
				}            
			});
		}
 });


//Book An Appiontment
$('#prescription').validate({ // initialize the plugin
        rules: {
            presdate: {
                required: true,
            },
			fullname: {
                required: true,
            },
			gender: {
                required: true,
            }, 
			apttime: {
                required: true,
            },
 			age: {
                required: true,
				number: true,
            },
			complain: {
                required: true,
            },
			pastissues: {
                required: true,
            },
			diagnosis: {
                required: true,
            }, 
			medicines: {
                required: true,
            } 
			 },
           
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"generate_prescription.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ $('#loader').show();},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(5000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(5000).fadeOut();
				if(resp.value2=="S"){
				$('#loader').hide();
				$('#prescription').hide();
				$('#thankyou').show();
	  			}
				 
				 
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});



$('#profileupdate').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
            },
			email: {
                required: true,
				email: true,
            },
			gender: {
				required: true,
			},
			age: {
            required: true,
			number: true,
			max:100,
            },
			mstatus: {
				required: true,
			},
			height: {
				required: true,
			},
			height: {
				required: true,
			},
			address: {
				required: true,
			},
			city: {
				required: true,
			},
			state: {
				required: true,
			},
			country: {
				required: true,
			},
			zip: {
                required: true,
				number: true,
            },
			mobile: {
                required: true,
				number: true,
				minlength:9,
				maxlength:10,
            },
		 
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth1.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ 
				$('#spinner').show();
				$("#updatebtn").val('Updating Please wait......');
				$("#updatebtn").prop('disabled', true);
			},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				if(resp.value2=="S"){ 
				localStorage.name=resp.value3;
				localStorage.email=resp.value4;
				localStorage.addr=resp.value5;
				localStorage.city=resp.value6;
				localStorage.state=resp.value7;
				localStorage.cont=resp.value8;
				localStorage.zip=resp.value15;
				localStorage.ut=resp.value9;
				localStorage.uid=resp.value10;
				localStorage.mobile=resp.value11;
				localStorage.gender=resp.value12;
				localStorage.age=resp.value13;
				localStorage.height=resp.value16;
				localStorage.weight=resp.value17;
				localStorage.mstatus=resp.value18;
				localStorage.profile_pic=resp.value14;
					window.location.href = "edit-profile.html"; 
				}
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$('#spinner').hide(5000);
				$("#updatebtn").prop('disabled', false);
				$("#updatebtn").val('Update Profile');
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});




    });
	
	
	
	
	