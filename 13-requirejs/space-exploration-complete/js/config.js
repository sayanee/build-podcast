require.config({

	baseUrl: '/js',

	deps: ['main'],

	paths: {
		jQuery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min',
		Fittext: 'plugins/fittext',
		Slides: 'plugins/slides'
	},

	shim: {
		jQuery: {
			exports: 'jQuery'
		},
		Fittext: {
			deps: ['jQuery'],
			exports: 'jQuery'
		},
		Slides: {
			deps: ['jQuery'],
			exports: 'jQuery'
		}
	},

	waitSeconds: 20

})