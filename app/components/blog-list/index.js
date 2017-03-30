import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      console.log('edit 3');
      this.sendAction('edit', this.get('blog'));
    },
    cancel() {
      this.get('blog').rollbackAttributes();
      this.sendAction('cancel');
    },
    delete() {
      console.log('almost');
      this.sendAction('delete', this.get('blog'));
    },
  }
});
