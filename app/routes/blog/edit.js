import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
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
