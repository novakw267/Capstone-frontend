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
    save() {
      console.log('save', this.get('blog'));
      this.sendAction('save', this.get('blog'));
      this.set('createBlog', null);
    },
    cancel() {
      this.get('blog').rollbackAttributes();
      this.sendAction('cancel');
    }
  }
});
