import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  new() {
    console.log('check check');
    this.sendAction('edit', this.get('comment'));
  },
}
});
