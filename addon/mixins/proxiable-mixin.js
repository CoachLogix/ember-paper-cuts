import Ember from 'ember';
import ProxyMixin from './proxy-mixin';

const { Mixin, run } = Ember;

export default Mixin.create({
  init(){
    this._super(...arguments);
    run(()=>{
        run.scheduleOnce('afterRender', this, 'registerProxy');
    });
  },
  registerProxy(){
    let proxy = this.nearestOfType(ProxyMixin);
    if (proxy) {
      proxy.register(this);
    }
  },

  processProxy: null
});
