var Videos = Backbone.Collection.extend({

  model: Video,

  el: '#app',

  search: function(search) {
    var self = this;
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        maxResults: '5',
        part: 'snippet',
        q: 'gugudan',
        type: 'video',
      },
      dataType: 'json',
      success: function(data) {
      //  console.log(data);
        self.populateList(data.items);
      },

      error: function(data) {
        console.log('ERROR, COULD NOT SEARCH');
      }
      
    });
  },


  populateList: function(data) {
// console.log(this);
    new VideoListView({
      collection: data
    }).render();
  }

  
});
