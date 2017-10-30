 /**
  * From:
  * https://stackoverflow.com/questions/41839198/applying-behaviors-with-js-mixins-in-polymer-2
  * */
class MixinBuilder {  
  constructor(superclass) {
    this.superclass = superclass;
  }
  with(...mixins) { 
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
const Mixin = (superclass) => new MixinBuilder(superclass);
window.Mixin = Mixin;

export default Mixin