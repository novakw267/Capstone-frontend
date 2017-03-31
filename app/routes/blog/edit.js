import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    editBlog (blog) {
      this.transitionTo('blog-list.post', blog);
    },
  saveBlog(blog) {
    blog.save()
    .then(() => this.transitionTo('blogs.index'))
    .then(() => {
      this.get('flashMessages')
        .success("Great change man, rock on!.");
    });
  },
  deleteBlog (blog) {
    this.get('auth').deleteBlog(blog);
    blog.destroyRecord();
  },
  cancel () {
    history.back();
  }
}
});
