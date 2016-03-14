import Ember from 'ember';
import layout from '../templates/components/paper-dropdown-menu-item';
import PaperMenuItem from 'ember-paper/components/paper-menu-item';

const { computed } = Ember;

export default PaperMenuItem.extend({
  layout: layout,
  checked: false,
  checkIcon: 'check',
  shortcut: null,

  hasShortcut: computed('shortcut', function() {
    return !!this.get('shortcut');
  }),

  mouseEnter() {
    this._super(...arguments);
    // Remove focus from any sibling menu items by focusing on this menu-item's button.
    this.$('.md-button').focus();
  }

});
