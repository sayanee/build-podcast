$(document).ready(function() {

	var slide = $('.slides li');
	slide.fadeOut(10);

	function fade($ele) {
    $ele.fadeIn(300).delay(4000).fadeOut(300, function() {
      var $next = $(this).next();
      fade($next.length > 0 ? $next : $(this).parent().children().first());
   	});
	};

	fade(slide.first());

});