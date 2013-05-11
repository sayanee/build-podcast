var app = app || {};

app.ReadsView = Backbone.View.extend({

  el: '#reads',

  initialize: function(initialReads) {
    this.collection = new app.Reads(initialReads);
    this.render();
    this.listenTo( this.collection, 'add', this.renderRead);
  },

  render: function() {
    this.collection.each(function(item) {
      this.renderRead(item);
    }, this);
  },

  renderRead: function(item) {
    var readView = new app.ReadView({
      model: item
    });
    this.$el.append( readView.render().el );
  },

  events: {
    'click #add': 'addRead'
  },

  addRead: function(e) {
    e.preventDefault();

    var formData = {};

    $('#addRead').children('input').each(function(i, el) {
      formData[el.id] = $(el).val();
    });

    this.collection.add( new app.Read(formData));
  }

});
