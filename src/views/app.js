var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.Videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search'),
      collection: this.Videos
    }).render();    

    new VideoListView({
      el: this.$('.list'),
      collection: this.Videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.Videos
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
