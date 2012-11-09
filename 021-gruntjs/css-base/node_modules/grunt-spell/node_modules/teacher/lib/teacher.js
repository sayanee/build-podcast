/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Api = require('./api');

/**
 * `Teacher` constructor.
 *
 * @param {String} Language.
 * @param {Array} Ignored types.
 */
function Teacher(lang, ignored) {
  this.ignored = ignored || [
    'bias language', 'cliches', 'complex expression',
    'diacritical marks', 'double negatives', 'hidden verbs',
    'jargon language', 'passive voice', 'phrases to avoid',
    'redundant expression'
  ];

	this.lang = lang || 'en';

	this.api = new Api;
};

/**
 * Returns ignored types.
 *
 * @returns {Array}
 * @api public
 */
Teacher.prototype.ignore = function() {
  return this.ignored;
};

/**
 * Language getter.
 *
 * @returns {String}
 * @api public
 */
Teacher.prototype.language = function() {
	return this.lang;
};

/**
 * Check supplied text for spell errors.
 *
 * @param {String} Text
 * @param {Function} Callback.
 * @api public
 */
Teacher.prototype.check = function(text, fn) {
	var ignored = this.ignore();

	this.api.get(text, 'checkDocument', this.language(), function(err, data) {
		if (err || !data || !data.error) return fn(err, null);	
		if (!Array.isArray(data.error)) data.error = [data.error];

		var errors = data.error.filter(function(obj) {
			return !(~ignored.indexOf(obj.type));
		});

		fn(null, errors);
	});
};

/**
 * Expose `Teacher`.
 */
module.exports = Teacher;
