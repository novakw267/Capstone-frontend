import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subject: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.attr('string'),
  editable: DS.attr('boolean')
});
