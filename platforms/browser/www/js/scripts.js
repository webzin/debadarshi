"use strict";
var hosturl="http://127.0.0.1/ddauc/";
$(document).ready(function(){

 //Add Appiontment
$("#appiontment").submit(function(){
	
		var service=$("#service").val();
		var consultant=$("#consultant").val();
		var aptdaytime=$("#aptdaytime").val();	
		var fullname=$("#fullname").val();
		var phone=$("#phone").val();
		var email=$("#email").val();
		var gender=$("#gender").val();	
		var issues=$("#issues").val();
		
		var dataString="service="+service+"&consultant="+consultant+"&aptdaytime="+aptdaytime+"&fullname="+fullname+"&phone="+phone+"&email="+email+"&gender="+gender+"&issues="+issues+"&load=";
		if($.trim(customername).length>0 & $.trim(orderno).length>0 & $.trim(veichle).length>0 & $.trim(building).length>0)
		
		
               
	{
		$.ajax({
			type: "POST",
			url: hosturl+"auth.php?callback=?",
			data: dataString,
			crossDomain: true,
			cache: false,
			beforeSend: function(){ $("#load").val('Load Adding...');},
			success: function(data, status){
			
				var resp = $.parseJSON(data);
			 
				$('html, body').animate({ scrollTop: $('#main-stack').offset().top }, 500);
				$('#sucessMessage').html(resp.value1);
				$('#sucessMessage').show();
				$('#sucessMessage').delay(5000).fadeOut();
				$("#orderno").val(''); 
				$("#orderno").focus();
				$("#load").val('Add Load');
				if(resp.value3=="S"){
				localStorage.lid=resp.value2;
				window.location.href = "add-warrant.html";
				}
				 
			}
			
		});
	}return false;

});


    });