var program = require('commander');
var path = require('path');
require('shelljs/global');
var clc = require('cli-color');

module.exports = function(config) {
  program
    .command('open')
    .description('open an on-going episode')
    .action(function() {

      [config.postDir, config.postFile, config.demoDir].forEach(function(file) {
        if (exec('open ' + file).code !== 0) {
          return;
        } else {
          console.log('SUCCESS: Opened ' + file);
        }
      })

      if (exec('subl ' + config.demoDir).code !== 0) {
        return;
      } else {
        console.log('SUCCESS: Opened ' + config.demoDir + ' in text editor');
      }

      console.log(clc.red('On-going episode ' + config.num + ' ' + config.episode +' opened!'));
      return;
    });

}
