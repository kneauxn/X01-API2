
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
  // to return one game by ID
  byId(id) {
    return this.collection.findOne({_id: id});
  }
  // this will be used to post a new game to the history after a game is completed.
  create(question = {}) {
    return this.collection.insert(game);
  }
  // this would be used to update a game record. Don't know if I will even use this.
  update(id, question = {}) {
    return this.collection.update({_id: id}, {$set: game});
  }
  // this is to remove a game. Also don't know if I will use this. Maybe if I have enough time
  remove(id) {
    return this.collection.remote({_id: id}, true)
  }
};
