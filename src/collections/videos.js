var Videos = Backbone.Collection.extend({

  model: Video,

  // el: '#app',

  search: function(search) {
    // var self = this;
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        maxResults: '5',
        part: 'snippet',
        q: search,
        type: 'video',
      },
      dataType: 'json',
      success: (data) => {
        this.reset();
        _.each(data.items, (video) => {
          this.add(video);
        });
        this.trigger('refresh', this);
      },

      error: function(data) {
        console.log('ERROR, COULD NOT SEARCH');
      }
      
    });
  },
  
});
