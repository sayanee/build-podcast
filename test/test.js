var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().withCapabilities({'browserName': 'chrome'}).build();
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var screenshotDirectory = __dirname + '/screenshots/';

function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(screenshotDirectory + filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe('from Build Podcast homepage', function(){
  this.timeout(50000);

  before(function(done) {
    client.get('http://localhost:4000').then(function(){
      done();
    });
  });

  afterEach(function() {
    var title = this.currentTest.fullTitle();
    var screenshotName = title.replace(/\s/g, '-') + '.png';
    client.takeScreenshot().then(function (png) {
      writeScreenShot(png, screenshotName);
    });
  })

  after(function(done) {
    client.quit().then(function(){
      done();
    });
  });

  it('a visitor can see the correct title', function(done) {
    this.timeout(50000);
    client.getTitle().then(function(title){
      expect(title).to.equal('Build Podcast | Screencasts on tech tools');
      done();
    });
  });

  it('a visitor can see the correct number of episodes', function(done) {
    this.timeout(50000);
    client.findElements(webdriver.By.css('.searchable')).then(function(episodes) {
      expect(episodes.length).to.be.above(50);
      done();
    });
  });

  it('a visitor can see the correct number of episodes after search', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('search')).sendKeys('web');
    client.findElements(webdriver.By.css('.searchable[data-index*="web"]')).then(function(episodes) {
      expect(episodes.length).to.equal(3);
    });
    done();
  });

  it('resizes video according to page size')

});
