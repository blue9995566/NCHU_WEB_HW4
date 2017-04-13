$(document).ready(function() {
	$('#display').hide();
	$('#quinntb').hide();
	$('#jaycetb').hide();
	$('#img1').click(function() {
		$('#quinntb').show(200);
		if (!$('#jaycetb').is(':hidden'))
			$('#jaycetb').fadeOut(200);
		return false;
	});
	$('#img2').click(function() {
		$('#jaycetb').show(200);
		if (!$('#quinntb').is(':hidden'))
			$('#quinntb').fadeOut(200);
		return false;
	});
	$('h3').click(function() {
		$('#display').slideToggle(300);
		if($(this).html()==("英雄列表↓"))
			$(this).html("英雄列表↑");
		else
			$(this).html("英雄列表↓");
		
	});
	$('#bt1').click(function() {
		$('#video1').fadeToggle();
		if($(this).html()==("&gt;&gt;"))
			$(this).html("<<");
		else
			$(this).html(">>");
	});
	$('#bt2').click(function() {
		$('#video2').toggle();
		if($(this).html()==("&gt;&gt;"))
			$(this).html("<<");
		else
			$(this).html(">>");
	});
});