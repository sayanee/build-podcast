var app = app || {};

app.ReadView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {
    this.render();
  },

  template: _.template( $('#readView').html() ),

  render: function(){
    this.$el.html( this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click #done': 'doneReading'
  },

  doneReading: function() {
    this.model.destroy();
    this.remove();
  }

});
