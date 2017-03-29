import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').createRecord('blog', {});
},
actions: {
  createBlog(blog) {
    console.log('creating blog', blog);
    blog.save()
    .then(() => this.transitionTo('blogs'));
  },
  cancel () {
    history.back();
  }
}
});
