import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').createRecord('blog');
},
actions: {
  createBlog(blog) {
    blog.save(blog)
    .then(() => this.transitionTo('blogs'));
  },
  cancel () {
    history.back();
  }
}
});
