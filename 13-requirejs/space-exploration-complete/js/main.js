require(
[
	'jQuery',
	'Fittext',
	'Slides'
],
function($, Fittext, Slides) {
	$("h1").fitText(0.8);
	$(".rslides").responsiveSlides();
});