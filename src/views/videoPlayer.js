var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(video) {
    this.$el.html('<div class="loading">Select A Video!</div>');
    if (video) {
      this.$el.html(this.template(video.attributes));
    }    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
