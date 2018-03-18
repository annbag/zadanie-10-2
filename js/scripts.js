$(document).ready(function(){
	console.log('DOM loaded');
});


$(function() {
	var span = $('span');
		span.each(function(index, element) {
			if(index % 2 == 0) {
				$(element).css('color','red');
				console.log(span);
			}; //$("span:even").css('color', 'red');
		});
});

$(function() {
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button ='<button class="btn" data-tmp="' + index + '"> Click me</button>'
		$(element).append(button)
		console.log(button);
	});
});

$(function(){
	$("button").click(function(){
		alert($(this).attr("data-tmp"));
		console.log(this);
	});
});

