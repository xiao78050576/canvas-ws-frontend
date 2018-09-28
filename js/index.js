$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var username = $("#username").val();
		var password = $("#password").val();
		var comment = $("#comment").val();
		
		// alert("name:" + name + ";username:" + username + ";password:" + password + ";comment:" + comment);
		// alert("/add?time=" + new Date().getMilliseconds());
		
		$.ajax({
			url:"/add?time=" + new Date().getMilliseconds(),
			async:true,
			cache:false,
			type:"POST",
			data:{
				name:name,
				username:username,
				password:password,
				comment:comment
			},
			success:function(result, status, xhr){
				alert("success:" + status);
			},
			error:function(xhr, status, error){
				alert("error:" + status);
			}
		});
	});
	
	$("#execute").click(function(){
		var id = $("#id").val();
		
		// alert("id:" + id);
		// alert("/getUser?time=" + new Date().getMilliseconds());
		
		$.ajax({
			url:"/getUser?time=" + new Date().getMilliseconds(),
			async:true,
			cache:false,
			type:"GET",
			data:{
				id:id
			},
			success:function(result, status, xhr){
				alert("success:" + JSON.stringify(result));
			},
			error:function(xhr, status, error){
				alert("error:" + status);
			}
		});
	});

});