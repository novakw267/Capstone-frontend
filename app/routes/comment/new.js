import Ember from 'ember';

export default Ember.Route.extend({
  createComment (author, idea, model) {
    console.log('am I real')
    // let datasetId = model.get('id');
    let comment = this.get('store').createRecord('comment', {
      author: author,
      idea: idea,
    });
    comment.set('blog', model);
    console.log(comment.get('blog_id'));
    comment.save()
      .then(() => this.transitionTo('comments'));
  }
});
