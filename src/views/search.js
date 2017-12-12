var SearchView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('search', this.render, this);
  },

  events: {
    'click button.btn': 'handleSearchButtonClick' 
  },

  handleSearchButtonClick: function() {
    // console.log(this);
    this.collection.search('yo');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
