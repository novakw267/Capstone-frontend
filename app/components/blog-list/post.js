import Ember from 'ember';

export default Ember.Component.extend({
  edit() {
    console.log('edit');
    this.sendAction('edit', this.get('blog'));
    this.transitionTo('blog-list.post');
  },
  cancel() {
    this.get('blog').rollbackAttributes();
    this.sendAction('cancel');
  }
});
