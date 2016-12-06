import Ember from 'ember';
import layout from '../templates/components/paper-row';

const { Component } = Ember;

export default Component.extend({
  layout,

  tagName: 'md-data-table-row'
});
