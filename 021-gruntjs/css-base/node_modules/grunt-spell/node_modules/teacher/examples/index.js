/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var teacher = require('../lib/');

/**
 * Simple.
 */
teacher.check('Thsi si wrogn', function(err, data) {
	console.log(data);
});

teacher.check('This is right', function(err, data) {
	console.log(data);
});

/**
 * Advanced with custom language.
 */
var teach = new teacher.Teacher('fr', ['ignored type']);

teach.check('No idea.', function(err, data) {
	console.log(data);
});
