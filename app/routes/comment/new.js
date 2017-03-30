import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').createRecord('comment');
},
actions: {
  createComment(comment) {
    console.log('say what?');
    comment.save()
    .then(() => this.transitionTo('comments.index'));
  },
  cancel () {
    history.back();
}
}
});
