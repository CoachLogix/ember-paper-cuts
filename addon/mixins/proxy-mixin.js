import Ember from 'ember';
const { Mixin, computed, A } = Ember;

export default Mixin.create({
  proxiedComponents: computed(function() {
    return A();
  }),
  register(component) {
    if (!component.get('skipProxy')) {
      this.get('proxiedComponents').addObject(component);
    }
  },
  unregister(component) {
    this.get('proxiedComponents').removeObject(component);
  },
  isProxiedComponent(component) {
    return this.get('proxiedComponents').contains(component);
  }
});
