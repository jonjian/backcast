var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.Videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.Videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
