
const COLLECTION = 'games';

export default class {
  
  constructor(db) {
    // Setting a shortcut for db.games
    this.collection = db[COLLECTION];
  }
  // to return the entire collection
  all() {
    return thi.collection.find({});
  }
  // to return one doc by ID
  byId(id) {
    return this.collection.findOne({_id: id});
  }
  
  create(question = {}) {
    return this.collection.insert(game);
  }
  
  update(id, question = {}) {
    return this.collection.update({_id: id}, {$set: game});
  }
  
  remove(id) {
    return this.collection.remote({_id: id}, true)
  }
};
