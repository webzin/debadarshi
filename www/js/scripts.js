"use strict";
var hosturl="http://advuro.wordpress-guru.net/";
//var hosturl="http://127.0.0.1/ddauc/";
$(document).ready(function(){
 
	
	
$("#signout").click(function(){
localStorage.clear();
window.location.href = "login.html";
});
 
 
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
			fullname: {
                required: true,
            },
			mobile: {
                required: true,
				number: true,
            },
			age: {
                required: true,
				number: true,
            },
			email: {
                required: true,
				email:true,
            },
			gender: {
                required: true,
            },
			
			issues: {
                required: true,
            } 
			 },
           
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ $('#spinner').show();},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(1000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(5000).fadeOut();
				/*if(resp.value2=="S"){ window.location.href = "upload-documents.html"; }*/
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
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
			url: hosturl+"auth.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ $('#spinner').show();},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(1000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				if(resp.value2=="S"){ window.location.href = "activate.html"; }
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});


$('#reqotp').validate({ // initialize the plugin
        rules: {
  			mobile: {
                required: true,
				number: true,
            } 
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ $('#spinner').show();},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				$('#spinner').delay(1000).fadeOut();
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				/*if(resp.value2=="S"){ window.location.href = "activate.html"; }*/
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				 
				}
				}
				             
        });
	}

});


$('#activate').validate({ // initialize the plugin
        rules: {
           
			otp: {
                required: true,
				number: true
            }
			 },
	 
    submitHandler: function(form) {
 
			var fd = new FormData(form);
			
        $.ajax({
			url: hosturl+"auth.php",
			type: "POST",
			data: fd,
			contentType: false,
			processData: false,
			//data: $('#additem').serialize(),
			beforeSend: function(){ 
			$("#activatebtn").val('Activating................');},
            success: function(data, status) {
				var resp = $.parseJSON(data);
				 
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(2000).fadeOut();
				if(resp.value2=="S"){ window.location.href = "login.html"; }
				if(resp.value2=="L"){ window.location.href = "login.html"; }
				if(resp.value2=="E"){ 
				
				$("#otp").addClass("error");$("#otp").focus(); 
				$("#activatebtn").val('Activate Now');
				
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
			url: hosturl+"auth.php",
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
				localStorage.ut=resp.value9;
				localStorage.uid=resp.value10;
				localStorage.mobile=resp.value11;
				localStorage.gender=resp.value12;
				localStorage.age=resp.value13;
				localStorage.profile_pic=resp.value14;
				}
				if(resp.value9=="P"){ window.location.href = "profile.html"; } 
				if(resp.value9=="D"){ window.location.href = "doctor_profile.html"; } 
				if(resp.value2=="N"){ window.location.href = "activate.html"; }
				if(resp.value2=="E"){
				$('#sucessMessage').delay(5000).fadeOut();
				$("#mobile").addClass("error");
				$("#mobile").focus();
				
				}
				}
				             
        });
	}

});

 


    });