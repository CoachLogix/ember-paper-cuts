import Ember from 'ember';
const { Mixin } = Ember;

export default Mixin.create({
  classNameBindings: ['warn:md-warn', 'accent:md-accent', 'primary:md-primary']
});
