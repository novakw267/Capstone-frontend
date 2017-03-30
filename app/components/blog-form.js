import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('save', this.get('blog'));
      this.sendAction('save', this.get('blog'));
      this.set('createBlog', null);
    },
    cancel() {
      this.get('blog').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});
