var app = app || {};

app.Read = Backbone.Model.extend({

  url: '/reads'
  defaults: {
    title: 'No title',
    author: 'Unknown'
  },

  validate: function(attrs, options) {
    if (attrs.title === '') {
      return 'Title of the book can\'t be blank';
    }
  },

  initialize: function() {
    console.log('New book to read is added!');

    this.on('change:title', function(model){
      var title = model.get('title');
      console.log('Happy reading ' + title + '!');
    });
  },

  display: function() {
    return this.get('title') + ' by ' + this.get('author');
  }

});
