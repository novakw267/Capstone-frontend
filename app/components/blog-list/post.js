import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  save() {
    this.sendAction('save', this.get('blog'));
    this.set('createBlog', null);
  },
  }
});
