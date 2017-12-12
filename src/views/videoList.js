var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.videos = new Videos(exampleVideoData);

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