var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.collection.on('refresh', this.render, this);

  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.models.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var newVideo = new VideoListEntryView({model: video});
    this.$el.append(newVideo.render());
  },

  template: templateURL('src/templates/videoList.html')

});

