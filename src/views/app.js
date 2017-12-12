var AppView = Backbone.View.extend({

  el: '#app',

  initialize() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render() {
    this.$el.html(this.template());

    new SearchView({
      el: '.search',
      collection: this.videos
    }).render();    

    new VideoListView({
      el: '.list',
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: '.player',
      collection: this.videos
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
