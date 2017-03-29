import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.sendAction('edit', this.get('blog'));
    },
    delete() {
      return this.sendAction('delete', this.get('blog'));
    },
    save() {
      this.sendAction('save', this.get('blog'));
    },
    cancel() {
      this.get('blog').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});
