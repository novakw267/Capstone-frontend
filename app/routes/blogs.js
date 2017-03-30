import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log(this.get('blog'));
    return this.get('store').findAll('blog');
  },
});
