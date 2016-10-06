import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

//PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:4984/test-database');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the connection is lost
});

export default Adapter.extend({
  db: db
});