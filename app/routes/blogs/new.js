import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model () {
  return this.get('store').createRecord('blog');
},
actions: {
  createBlog(blog) {
    blog.save()
    .then(() => this.transitionTo('blogs.index'))
    .then(() => {
      this.get('flashMessages')
        .success("That's awesome, great addition to the list.");
    });
  },
  cancel () {
    history.back();
  }
}
});
