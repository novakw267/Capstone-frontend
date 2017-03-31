import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  newComment() {
    console.log('yeah, right');
    this.sendAction('edit', this.get('comment'));
  },
}
});
