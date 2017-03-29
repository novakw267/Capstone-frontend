import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log('u');
    return this.get('store').findAll('blog');
  },
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
