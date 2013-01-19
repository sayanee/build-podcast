$(document).ready(function() {

  var Color = {

    colorInput: '', // color input by user
    cssRGB: [], // color input by user as number array

    inputColor: function() {

      var me = this;

      $(document).keydown(function(evt) {

        if (evt.keyCode == 13) {
          // only if keypress is ENTER
          $('span').html('');

          me.colorInput = $('#color').val();
          // console.log('Color input: ' + me.colorInput);

          me.changeBgrColor(me.colorInput);
          me.extractColor(); // extract original color input
          me.showColorChange();
        }
      });

    },

    changeBgrColor: function(color) {
      $('body').css('background-color', color);
    },

    extractColor: function() {
      var me = this,
        tempColor = $('body').css('background-color')
        .replace('rgb(', '')
          .replace(')', '')
          .split(',');
      me.cssRGB[0] = parseInt(tempColor[0], 10);
      me.cssRGB[1] = parseInt(tempColor[1], 10);
      me.cssRGB[2] = parseInt(tempColor[2], 10);
      // console.log(me.cssRGB);
    },

    showColorChange: function() {
      var me = this;

      $('.color-change').addClass('visible');
      $('.color-change input[type=range]').attr('value', '100');
      $('.color-slider').change(function() {

        var percentage = (this.value - 100) / 100,
          newColor = [],
          red = me.cssRGB[0],
          green = me.cssRGB[1],
          blue = me.cssRGB[2],
          rgbaColor = '',
          hexColor = '#',
          fullColor = 255;

        // console.log(percentage);

        // lighten
        if (percentage > 0) {
          $('input').css('color', 'black');
          $('span').css('color', 'black');
          newColor[0] = parseInt((fullColor - red) * percentage + red, 10);
          newColor[1] = parseInt((fullColor - green) * percentage + green, 10);
          newColor[2] = parseInt((fullColor - blue) * percentage + blue, 10);
          hexColor += newColor[0].toString(16) + newColor[1].toString(16) + newColor[2].toString(16);

          rgbaColor = 'rgb(' + newColor[0] + ', ' + newColor[1] + ', ' + newColor[2] + ')';
          $('body').css('background-color', rgbaColor);

          // console.log(rgbaColor);
          $('span').html('lighten(' + me.colorInput + ', ' + parseInt(percentage * 100, 10) + '%)  --  ' + rgbaColor + '  --  ' + hexColor);

        }
        // darken
        else {
          percentage = Math.abs(percentage);
          $('input').css('color', 'white');
          $('span').css('color', 'white');
          newColor[0] = parseInt(red - red * percentage, 10);
          newColor[1] = parseInt(green - green * percentage, 10);
          newColor[2] = parseInt(blue - blue * percentage, 10);
          hexColor += newColor[0].toString(16) + newColor[1].toString(16) + newColor[2].toString(16);

          rgbaColor = 'rgb(' + newColor[0] + ', ' + newColor[1] + ', ' + newColor[2] + ')';
          $('body').css('background-color', rgbaColor);

          // console.log(rgbaColor);
          $('span').html('darken(' + me.colorInput + ', ' + Math.abs(parseInt(percentage * 100, 10)) + '%)  --  ' + rgbaColor + '  --  ' + hexColor);
        }

      });
    }
  };

  document.getElementById('color').focus();
  Color.inputColor();

});
