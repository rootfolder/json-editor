import Ember from 'ember';
import Ajv from 'npm:ajv';
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var schema = {
  "properties": {
    "foo": { "type": "string" },
    "bar": { "type": "number", "maximum": 3 }
  }
};
ajv.addSchema(schema, 'mySchema');

export default Ember.Controller.extend({
  actions: {
    codeChanged () {
      console.log("5");
      console.log(this.get('_subscription'));
      //console.log(value.getValue());
      //console.log(value.value);
      //console.log('Code changed, handled by controller');
      //var valid = ajv.validate('mySchema', data);
      //if (!valid) console.log(ajv.errorsText());
    }
  }
});
