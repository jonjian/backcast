var Video = Backbone.Model.extend({

  initialize(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select() {
    this.trigger('select', this);
  }

});
