import Ember from 'ember';
import layout from '../templates/components/paper-column';

export default Ember.Component.extend({
  layout: layout,

  tagName: "md-data-table-column",
  classNameBindings: ['icon:icon-column']
});
