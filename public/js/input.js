$(document).ready(function(){
	$('select').material_select();
	$('.modal-trigger').leanModal();
	console.log(local_data);

	$("#class-select").change(function(){
		var idx = parseInt($("#class-select").val());
		$("#form-class").html(function(){
			var str = "";
			for (var i = 0; i < local_data[idx].properties.length; i++) {
				str +=  '<div class="input-field col s12">' + 
						'<input id="input'+i+'" type="tel">' + 
					 	'<label for="input'+i+'">'+local_data[idx].properties[i]+'</label>' + 
					 	'</div>';
			}
			return str;
		});
	});
});