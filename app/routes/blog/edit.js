import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  saveBlog(blog) {
    blog.save()
    .then(() => this.transitionTo('blogs'));
  },
  cancel () {
    history.back();
  }
}
});
