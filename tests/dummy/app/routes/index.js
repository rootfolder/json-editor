import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    return RSVP.hash({
      code: this.store.findRecord('code', "5816E748-F6F3-C2CB-8416-A1B816C443F4")
    });
  },
  actions:{
    saveText(jsonText){
      const jsonCode = this.store.createRecord('code',{
        text: jsonText
      });
      jsonCode.save();
      this.toast.success('Saved last valid json:'+jsonText);
    }
  }
});
