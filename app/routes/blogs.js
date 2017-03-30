import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteBlog (blog) {
      console.log("gone!");
      blog.destroyRecord();
    },
  }
});
