$(function () {
			$('#number button').on('click', function(){inserttoInput($(this).html())});
			$('#ctrl button').on('click',function(){inserttoInput($(this).html())});
			function inserttoInput(id) {
				var ctrl = ['+', '-', '/', 'x'];
				var input = $('#input');
				var val = input.html();
				console.log(id);
				console.log('Input length='+val.length);
				
				if (id == '=') {
					if(val == '' )
						input.html(0);
				}
				else if (id.match(/^[0-9]+$/) != null) {
					if(ctrl.indexOf(val.charAt(val.length-1))>-1){
						if(val == '' )
							input.html('');
						else
							input.html(val+' '+id);
					}
					else
						input.html(val+''+id);
				}else{
					if(ctrl.indexOf(val.charAt(val.length-1))>-1){
						input.html(val);
					}else
						input.html(val+' '+id);
				
				}
			}
		});