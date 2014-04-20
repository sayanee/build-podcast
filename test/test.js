var webdriver = require('selenium-webdriver'),
  client = new webdriver.Builder().withCapabilities({'browserName': 'chrome'}).build(),
  chai = require('chai'),
  assert = chai.assert,
  should = chai.should(),
  expect = chai.expect;

describe('From Build Podcast homepage', function(){
  this.timeout(50000);
  before(function(done) {
    client.get('http://localhost:4000').then(function(){
      done();
    });
  });


  it('sees the correct title', function(done) {
    this.timeout(50000);
    client.getTitle().then(function(title){
      expect(title).to.equal('Build Podcast | Screencasts on tech tools');
      done();
    });
  });

  it('sees the correct number of episodes', function(done) {
    this.timeout(50000);
    client.findElements(webdriver.By.css('.searchable')).then(function(episodes) {
      expect(episodes.length).to.be.above(50);
      done();
    });
  });

  it('sees the correct number of episodes after search', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('search')).sendKeys('web');
    client.findElements(webdriver.By.css('.searchable[data-index*="web"]')).then(function(episodes) {
      expect(episodes.length).to.equal(3);
    });
    done();
  });

  after(function(done) {
    client.quit().then(function(){
      done();
    });
  });

});
