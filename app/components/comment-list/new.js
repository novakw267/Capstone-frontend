import Ember from 'ember';

export default Ember.Component.extend({
  newComment:{
  author:null,
  idea: null,
},
  actions: {
    createComment () {
      console.log('yeah, right');
  let data = this.get('newComment');
  data.blog = this.get('blog');
  this.sendAction('createComment', data);
        this.set('newComment.content', null);
},
    save() {
      this.sendAction('save', this.get('comment'));
    },
  }
});
