var app = app || {};

app.Reads = Backbone.Collection.extend({
  model: app.Read,

  initialize: function(){

    this.on('add', function(model){
      var title = model.get('title');
      console.log('New book is added to the reading list: ' + title);
      console.log('Reading list size: ' + this.length);
    });

    this.on('remove', function(model) {
      var title = model.get('title');
      console.log('Book is removed from the reading list: ' + title);
      console.log('Reading list size: ' + this.length);
    })
  }
});
