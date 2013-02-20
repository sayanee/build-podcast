// lodash functions used :
// compact
// each
// object
// where
// min
// max
// functions
// templateSettings
// template

(function () {

  // ============== Arrays ================ //

  // _.compact
  var moonPics = [
    0,
    'img/metis.jpg',
    false,
    'img/adrastea.jpg',
    '',
    'img/amalthea.png',
    undefined,
    'img/thebe.jpg',
    null,
    'img/io.jpg',
    NaN,
    'img/europa.jpg',
    'img/ganymede.jpg',
    'img/callisto.jpg'
  ];

  // console.log( moonPics );
  // console.log( _.compact(moonPics) );
  $.each( _.compact(moonPics), function(i, val) {
    $('.moon-pics').append( '<li><img src="' + val + '"></li>' );
  });

  // _.object
  var moonNames = ['Io', 'Europa', 'Ganymede', 'Callisto'],
    moonDiameters = [3600, 3121, 5262, 4820];
  // console.log( _.object( moonNames, moonDiameters ) );
  $.each( _.object( moonNames, moonDiameters ) , function( key, value ){
    $('.galilean-moons').append( '<li>' + key + ': ' +  value + ' km diameter</li>' );
  });


  // ============== Collections ================ //

  // _.where
  var moonGroup = [
    { 'name': 'Metis', 'group': 'Inner'},
    { 'name': 'Adrastea', 'group': 'Inner'},
    { 'name': 'Amalthea', 'group': 'Inner'},
    { 'name': 'Thebe', 'group': 'Inner'},
    { 'name': 'Io', 'group': 'Galilean'},
    { 'name': 'Europa', 'group': 'Galilean'},
    { 'name': 'Ganymede', 'group': 'Galilean'},
    { 'name': 'Callisto', 'group': 'Galilean'}
  ];
  // console.log( _.where(moonGroup, {'group': 'Inner'})[0] );
  $.each( _.where(moonGroup, {'group': 'Inner'}) , function( key, value ){
    $('.inner-moons').append( '<li>' + value.name + ': ' +  value.group + ' group</li>' );
  });

  // _.min & _.max
  var moonOrbits = [
    { 'moon': 'Metis', 'orbit': 0.3},
    { 'moon': 'Adrastea', 'orbit': 0.3},
    { 'moon': 'Amalthea', 'orbit': 0.5},
    { 'moon': 'Thebe', 'orbit': 0.7},
    { 'moon': 'Io', 'orbit': 1.7},
    { 'moon': 'Europa', 'orbit': 3.5},
    { 'moon': 'Ganymede', 'orbit': 7.1},
    { 'moon': 'Callisto', 'orbit': 16}
  ];
  var minOrbit = _.min(moonOrbits, function(moon) { return moon.orbit; }),
    maxOrbit = _.max(moonOrbits, function(moon) { return moon.orbit; });

  $('.orbital-period').append( '<li>Min Orbital Speed is ' + minOrbit.orbit + ' days of the moon ' +  minOrbit.moon + '</li>' );
  $('.orbital-period').append( '<li>Max Orbital Speed is ' + maxOrbit.orbit + ' days of the moon ' +  maxOrbit.moon + '</li>' );

  // ============== Objects ================ //

  // _.functions
  console.log( _.functions(_) );
  console.log( _.functions($) );

  // ================ Utilities =============== //

  // OPTION B: Handlebar syntax
  _.templateSettings = {
    escape: /\{%-([\s\S]+?)%\}/g, // {%- %}
    evaluate: /\{%([\s\S]+?)%\}/g, // {% %}
    interpolate : /\{\{(.+?)\}\}/g // {{ }}
  };

  var markup = $("#template-moons").html(),
    compiled = _.template(markup, { moons: moonOrbits });
  $("#moons").html(compiled);

})();



