import Ember from 'ember';
import FlexMixin from '../mixins/flex-mixin';
import layout from '../templates/components/paper-table';

const { Component } = Ember;

export default Component.extend(FlexMixin, {
  layout
});
