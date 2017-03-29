import Ember from 'ember';

export default Ember.Component.extend({
  delete() {
    console.log('almost');
    return this.sendAction('delete', this.get('blog'));
  },
});
