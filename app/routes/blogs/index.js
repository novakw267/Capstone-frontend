import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  editBlog (blog) {
    this.transitionTo('blog.edit', blog);
  },
},
});
