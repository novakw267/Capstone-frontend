import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  editComment(comment) {
    console.log('check it');
    this.transitionTo('comment-list.new', comment);
  },
 }
});
