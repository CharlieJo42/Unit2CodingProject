const db = require ('../db/config');

class water {
    constructor(water){
        this.id = water.id || null;
        this.integer = water.integer;
    }

    static getAll(){
        return db.manyOrNone
        ('SELECT * FROM water ORDER BY id ASC')
        .then(water =>{
            return water.map(water => new this(water));
        })
    }
}


module.exports = water;

class user {
    constructor(user){
        this.id = user.id || null;
        this.name = user.name;
        this.status = user.status || false;
        this.email = user.email
    }

    static getAll(){
        return db.manyOrNone
        ('SELECT * FROM user ORDER BY id ASC')
        .then(user =>{
            return user.map(user => new this(user));
        })
    }
}

module.exports = user;