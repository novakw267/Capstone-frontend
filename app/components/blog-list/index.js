import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      console.log('almost');
      this.sendAction('delete', this.get('blog'));
    },
  }
});
