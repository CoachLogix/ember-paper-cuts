/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-paper-ext',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app) {
    this._super.included(app);
  }
};
