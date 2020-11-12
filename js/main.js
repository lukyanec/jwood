$(function(){

	$('.photo_list li a').magnificPopup({
	  type: 'image',
	  removalDelay: 300,
	  mainClass: 'mfp-fade',
	  gallery: {
	  	enabled: true
	  }
	});

	$('a[href^="#"]').click(function() {
		var target = $(this).attr("href");
		var destination = $(target).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 800);
		return false;
	});

});