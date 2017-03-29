import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log('k')
    return this.get('store').findAll('blog');
  },
});
