import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editBlog (blog) {
      this.transitionTo('blog-list.post', blog);
    },
  saveBlog(blog) {
    blog.save()
    .then(() => this.transitionTo('blogs'));
  },
  deleteBlog (blog) {
    console.log("gone!");
    blog.destroyRecord();
  },
  cancel () {
    history.back();
  }
}
});
