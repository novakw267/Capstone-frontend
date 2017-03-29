import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log('f');
    return this.get('store').findAll('blog');
  },
});
