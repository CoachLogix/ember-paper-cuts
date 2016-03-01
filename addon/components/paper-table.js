import Ember from 'ember';
import FlexMixin from '../mixins/flex-mixin';
import layout from '../templates/components/paper-table';

export default Ember.Component.extend(FlexMixin, {
  layout: layout
});
