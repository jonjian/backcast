var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.on('sync', this.render, this);
    
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.children().detach();
    console.log(this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
   
  },

  template: templateURL('src/templates/videoListEntry.html')

});
