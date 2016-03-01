import Ember from 'ember';

export default Ember.Mixin.create({
  touchStart(e) {
    return this.down(e);
  },
  mouseDown(e) {
    this.down(e);
  },
  touchEnd(e) {
    return this.up(e);
  },
  mouseUp(e) {
    return this.up(e);
  },
  touchCancel(e) {
    return this.up(e);
  },
  mouseLeave(e) {
    return this.up(e);
  },
  up: Ember.K,
  down: Ember.K,
  contextMenu: Ember.K,

  /*
   * Move events
   */

  mouseMove: function(e) {
    return this.move(e);
  },

  touchMove: function(e) {
    return this.move(e);
  },

  pointerMove: function(e) {
    return this.move(e);
  },

  move: Ember.K
});
