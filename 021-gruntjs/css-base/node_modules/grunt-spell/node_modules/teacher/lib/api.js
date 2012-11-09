/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var crypto = require('crypto');
var os = require('os');
var xml2js = require('xml2js');
var request = require('request');

/**
 * `Api` constructor.
 *
 * @param {Array} Ignored types.
 */
function Api(ignored) {
  this.uris = {
    'en': 'http://service.afterthedeadline.com',
    'fr': 'http://fr.service.afterthedeadline.com',
    'de': 'http://de.service.afterthedeadline.com',
    'pt': 'http://pt.service.afterthedeadline.com',
    'es': 'http://es.service.afterthedeadline.com'
  };

  this.parser = new xml2js.Parser;
};

/**
 * Return an url address for supplied language.
 *
 * @returns {Object|String}
 * @api public
 */
Api.prototype.url = function(lang) {
  if (arguments.length === 0) return this.uris;
  return this.uris[lang];
};

/**
 * Build a request options in order to spell check the
 * supplied text.
 *
 * @param {String} Text.
 * @param {String} Action.
 * @param {String} Language.
 * @param {Function} Callback.
 * @api public
 */
Api.prototype.get = function(text, action, lang, fn) {
  var self = this;

  var options = {
    method: 'POST',
    url: this.url(lang) + '/' + action,
    form: {data: text, key: this.key()}
  };

  this.request(options, function(err, res, body) {
    if (err) return fn(err, null);

    self.parser.parseString(body, function(err, result) {
      if (err) return fn(err);
      fn(null, result);
    });
  });
};

/**
 * Send a HTTP request to After The Deadline server.
 *
 * @param {Object} Request options.
 * @param {Function} Callback.
 * @api private
*/
Api.prototype.request = function(options, fn) {
  request(options, fn);
};

/**
 * Returns API key, which in this case is created from
 * the hostname.
 *
 * @returns {String}
 * @api private
*/
Api.prototype.key = function() {
  var sha = crypto.createHash('sha1');
  return sha.update(os.hostname()).digest('hex');
};

/**
 * Expose `Api`.
*/
module.exports = Api;
