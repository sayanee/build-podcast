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
var Teacher = require('../lib/teacher');

describe('Teacher', function() {
	describe('when constructed', function() {
    it('should setup ignored types', function() {
      var teacher = new Teacher;
      teacher.ignore().should.eql(['bias language', 'cliches', 'complex expression', 'diacritical marks', 'double negatives', 'hidden verbs', 'jargon language', 'passive voice', 'phrases to avoid', 'redundant expression']);
    });

		it('should setup the language', function() {
      var teacher = new Teacher;
			teacher.language().should.eql('en');
		});

    describe('with supplied params', function() {
      it('should overwrite them both', function() {
				var teacher = new Teacher('fr', ['foo']);
        teacher.ignore().should.eql(['foo']);
				teacher.language().should.eql('fr');
      });
    });
	});

	describe('when a check request is made', function() {
		it('should call the api with correct params', function(done) {
			var teacher = new Teacher;

			teacher.api.mock('get').and.replace(function(text, action, lang) {
				text.should.eql('foo');
				action.should.eql('checkDocument');
				lang.should.eql('en');
				done();
			});

			teacher.check('foo');
		});

		it('should return errors if any', function(done) {
			var teacher = new Teacher;

			teacher.api.mock('get').and.replace(function(text, action, lang, fn) {
				fn(new Error('test'));
			});

			teacher.check('foo', function(err) {
				err.should.be.ok;
				done();
			});
		});

		it('should filter ignored error types', function(done) {
			var teacher = new Teacher;

			teacher.api.mock('get').and.replace(function(text, action, lang, fn) {
				var ret = { error: 
				 [ { string: 'Worng',
						 description: 'Spelling',
						 precontext: {},
						 suggestions: {},
						 type: 'spelling' },
					 { string: 'owrd',
						 description: 'Spelling',
						 precontext: 'Worng',
						 suggestions: {},
						 type: 'bias language' } ] };
				fn(null, ret);
			});

			teacher.check('Worng owrd', function(err, data) {
				data.should.eql([
					{ string: 'Worng',
						 description: 'Spelling',
						 precontext: {},
						 suggestions: {},
						 type: 'spelling'
					}
				]);
				done();
			});
		});
	});
});
