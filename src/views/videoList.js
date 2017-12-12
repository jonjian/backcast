var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.videos = new Videos(window.exampleVideoData);

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

// {
//       var newVideo = new VideoListEntryView({model: Video});
//       this.$el.append(newVideo.render());
      
//     });