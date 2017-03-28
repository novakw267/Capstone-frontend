import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  idea: DS.attr('string')
});
