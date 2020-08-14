const db = require ('../db/config');

class water {
    constructor(water){
        this.id = water.id || null;
        this.integer = water.integer;
    }
}

class user {
    constructor(user){
        this.id = user.id || null;
        this.name = user.name;
        this.status = user.status || false;
        this.email = user.email
    }
}