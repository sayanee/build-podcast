/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();
var jack = require('jack');


/**
 * Context
 */
var Api = require('../lib/api');

describe('Api', function() {
  describe('when constructed', function() {
    it('should setup uris', function() {
      var api = new Api;

      api.url().should.eql({
        'en': 'http://service.afterthedeadline.com',
        'fr': 'http://fr.service.afterthedeadline.com',
        'de': 'http://de.service.afterthedeadline.com',
        'pt': 'http://pt.service.afterthedeadline.com',
        'es': 'http://es.service.afterthedeadline.com'
      });
    });
  });

  describe('url', function() {
    it('should return an url address for supplied language', function() {
      var api = new Api;
      api.url('fr').should.eql('http://fr.service.afterthedeadline.com');
    });
  });

  describe('when a request is made', function() {
    it('should contain data, key and valid url', function(done) {
      var api = new Api;
      var data = 'This is worng';
      var key = api.key();

      api.mock('request').and.replace(function(options, cb) {
        options.should.eql({
          method: 'POST',
          url: 'http://service.afterthedeadline.com/checkDocument',
          form: {data: data, key: key}
        });
        api.request.reset()
        done();
      });

      api.get(data, 'checkDocument', 'en');
    });

    describe('and returned', function() {
      it('should contain errors if any', function(done) {
        var api = new Api;

        api.stub('request').and.replace(function(options, cb) {
          cb(new Error('test'));
        });

        api.get('foo', 'checkDocument', 'en', function(err) {
          err.should.be.ok;
          done();
        });
      });

      it('should parse the xml respones', function(done) {
        var api = new Api;

        api.stub('request').and.replace(function(options, cb) {
          var res = "<results>\n  <error>\n    <string>worng</string>\n    <description>Spelling</description>\n    <precontext>is</precontext>\n    <suggestions>\n        <option>wrong</option>\n        <option>worn</option>\n        <option>wong</option>\n    </suggestions>\n    <type>spelling</type>\n    \n  </error>\n</results>";
          cb(null, null, res);
        });

        api.get('foo', 'checkDocument', 'en', function(err, data) {
          data.should.be.a('object');
          data.should.have.property('error');
          done();
        });
      });
    });
  });
});
