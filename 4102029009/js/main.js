$(document).ready(function() {
	$('#img1').click(function() {
		$('#quinntb').show(300);
		$(this).fadeTo(300,1);
		$('#img2').fadeTo(300,0.5);
		if (!$('#jaycetb').is(':hidden'))
			$('#jaycetb').fadeOut(50);
		return false;
	});
	$('#img2').click(function() {
		$('#jaycetb').fadeIn(1000);
		$(this).fadeTo(300,1);
		$('#img1').fadeTo(300,0.5);
		if (!$('#quinntb').is(':hidden'))
			$('#quinntb').slideUp(50);
		return false;
	});
	$('h1').mouseenter(function() {
		$(this).hide();
		$('p').slideDown(3000,function(){
			$('button').show(100);
		});
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