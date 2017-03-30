import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newComment(comment) {
      console.log('check it');
      this.transitionTo('comment-list.new', comment);
    },
  editBlog (blog) {
    this.transitionTo('blog.edit', blog);
  },
  deleteBlog (blog) {
    blog.destroyRecord();
  },
},
});
