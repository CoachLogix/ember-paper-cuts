import Ember from 'ember';
const { Mixin, computed } = Ember;

/**
 * This mixin add support for hasBlock for Ember < 1.13.0
 *
 * @todo Remove in Ember 2.0
 * See also https://github.com/emberjs/ember.js/pull/11313
 */
export default Mixin.create({
  hasBlock: computed(function() {
    if (typeof this._super.hasBlock === 'undefined') {
      return !!this.get('template');
    }
    return this.hasBlock;
  })
});
