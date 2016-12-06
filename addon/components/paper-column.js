import Ember from 'ember';
import layout from '../templates/components/paper-column';
const { Component } = Ember;

export default Component.extend({
  layout,

  tagName: 'md-data-table-column',
  classNameBindings: ['icon:icon-column']
});
