import Ember from 'ember';
import Ajv from 'npm:ajv';

var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var schema = {
   "$schema": "http://json-schema.org/draft-04/schema#",
   "title": "Product",
   "description": "A product from Acme's catalog",
   "type": "object",
	
   "properties": {
	
      "id": {
         "description": "The unique identifier for a product",
         "type": "integer"
      },
		
      "name": {
         "description": "Name of the product",
         "type": "string"
      },
		
      "price": {
         "type": "number",
         "minimum": 0,
         "exclusiveMinimum": true
      }
   },
	
   "required": ["id", "name", "price"]
};
ajv.addSchema(schema, 'mySchema');

export default Ember.Controller.extend({
  actions: {
    codeChanged (event) {

      console.log(event);
      console.log(typeof event);
      try{
        var valid = ajv.validate('mySchema', JSON.parse(event));
        if (!valid){
          console.log(ajv.errorsText());
          this.toast.warning(ajv.errorsText());
        }
        else{
          this.set('model.code', event);
          this.toast.success('JSON is valid');
        } 
      }
      catch(err){
        this.toast.error(err);
      }
    }
  }

});
