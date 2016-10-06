import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    const codeList = this.store.findAll('code');
    console.log(codeList);
    return {
      code: "{}" 
      //code: this.store.findRecord('code', "5")
    };
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
