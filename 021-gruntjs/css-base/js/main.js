(function() {

	// change stylesheets
	var link = $('link').first();

	$('button').on('click', function() {
		var $this = $(this),
			buttons = $('button');
			stylesheet = $this.data('file');
		link.attr('href', 'css/' + stylesheet + '.css');
		buttons.removeClass('active');
		$this.addClass('active');
	});

	// display the html according to chosen
	var checkbox = $('input[type=checkbox]');

	$(checkbox).click(function() {

		if( !$(this).is(':checked') ){
			if ( $(this).val() === 'header') {
				$('h1').addClass('invisible');
				$('h2').addClass('invisible');
				$('h3').addClass('invisible');
				$('h4').addClass('invisible');
				$('h5').addClass('invisible');
				$('h6').addClass('invisible');
			} else if ( $(this).val() === 'paragraph'){
				$('p').addClass('invisible');
			} else if ( $(this).val() === 'table'){
				$('table').addClass('invisible');
			} else if ( $(this).val() === 'list'){
				$('.container ol').addClass('invisible');
				$('.container ul').addClass('invisible');
			} else if ( $(this).val() === 'blockquote'){
				$('blockquote').addClass('invisible');
			} else {
				$('table').addClass('invisible');
			}
		}
		else{
			if ( $(this).val() === 'header') {
				$('h1').removeClass('invisible');
				$('h2').removeClass('invisible');
				$('h3').removeClass('invisible');
				$('h4').removeClass('invisible');
				$('h5').removeClass('invisible');
				$('h6').removeClass('invisible');
			} else if ( $(this).val() === 'paragraph'){
				$('p').removeClass('invisible');
			} else if ( $(this).val() === 'table'){
				$('table').removeClass('invisible');
			} else if ( $(this).val() === 'list'){
				$('.container ol').removeClass('invisible');
				$('.container ul').removeClass('invisible');
			} else if ( $(this).val() === 'blockquote'){
				$('blockquote').removeClass('invisible');
			} else {
				$('table').removeClass('invisible');
			}
		}
	});

}());
