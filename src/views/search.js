var SearchView = Backbone.View.extend({

  initialize() {
    this.collection.on('search', this.render, this);
  },

  events: {
    'click button.btn': 'handleSearchButtonClick' 
  },

  handleSearchButtonClick() {
    this.collection.search($('.form-control').val());
  },
  
  render() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
