var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().withCapabilities({'browserName': 'chrome'}).build();
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var screenshotDirectory = __dirname + '/screenshots/';
var sys = require('sys')
var exec = require('child_process').exec;
require('colors');

function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(screenshotDirectory + filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

function puts(error, stdout, stderr) {
  sys.puts(stdout);
  sys.puts(stderr);
}

console.log('Welcome to End-to-End Build Podcast test!'.underline.blue);

describe('from Build Podcast homepage', function(){
  this.timeout(50000);

  beforeEach(function(done) {
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

  it('a visitor can visit rss page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('rss')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('FeedBurner');
      done();
    });
  });

  it('a visitor can visit itunes page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('itunes')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('iTunes');
      done();
    });
  });

  it('a visitor can visit vimeo page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('vimeo')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('Vimeo');
      done();
    });
  });

  it('a visitor can visit youtube page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('youtube')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('YouTube');
      done();
    });
  });

  it('a visitor can visit github page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('github')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('sayanee/build-podcast');
      done();
    });
  });

  it('a visitor can visit twitter page', function(done) {
    this.timeout(100000);
    client.findElement(webdriver.By.id('twitter')).click();
    client.getTitle().then(function(title) {
      expect(title).to.contain('Twitter');
      done();
    });
  });

});

describe('from Build Podcast episode page', function(){
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

  it('a visitor can see the title', function(done) {
    client.findElement(webdriver.By.css('.searchable:nth-of-type(1) a')).click();
    client.getTitle().then(function(title){
      expect(title).to.equal('Build Podcast | 058 RSpec');
      done();
    });
  })

  it('a visitor can see full-width video at 960px', function(done) {
    client.findElement(webdriver.By.id('video')).getCssValue('width').then(function(videoWidth) {
      expect(videoWidth).to.equal('960px');
    });
    done();
  })

  it('a visitor can flexible width video when the browser is resized to 300px', function(done) {
    var browserWidth = 300;
    var browserHeight = 800;
    var expectedVideoWidth = 0.95 * browserWidth + 'px';

    client.manage().window().setSize(browserHeight, browserHeight);
    done();
  })

});

after(function() {
  console.log('Check all test screenshots in folder test/screenshots'.yellow);
})
