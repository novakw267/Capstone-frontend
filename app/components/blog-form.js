import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('blog'));
    },
    cancel() {
      this.get('blog').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});
