import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      console.log('edit');

      this.sendAction('edit', this.get('blog'));
    },
    delete() {
      console.log('almost');
      this.sendAction('delete', this.get('blog'));
    },
  }
});
