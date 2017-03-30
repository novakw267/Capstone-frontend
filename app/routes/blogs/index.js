import Ember from 'ember';

export default Ember.Route.extend({
  // model () {
  //   console.log('k');
  //   return this.get('store').findAll('blog');
  // },
  actions: {
  editBlog (blog) {
    console.log('edit2');
    this.transitionTo('blog.edit', blog);
  },
  deleteBlog (blog) {
    console.log("gone!");
    blog.destroyRecord();
  },
},
});
