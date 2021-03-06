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
        });
    }

static getById(id){
    return db.oneOrNone('SELECT * FROM water WHERE id = $1', id)
        .then(water) => {
            if (water) return new this(water);
            else throw new Error ('No water logged');
        });
    },

    save(){
        return db.one(`INSERT INTO water (id, integer) 
        VALUES ($/id/, $/integer/) RETURNING *`, this).then(todo =>
            Object.assign(this, todo));
    }
    
    update(changes) {
        Object.assign(this, changes);
        return.db.one(`UPDATE water SET 
            amount = $/amount/,
            WHERE id = $/id/,
            RETURNING * `, this).then((water) =>
            Object.assign(this, todo));
    }
};


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
        });
    }
    save() {
        return db.one(`INSERT INTO user (id, name, status, email) VALUES ($/id/, $/name/, $/status/, $/email/)
            RETURNING *`, this).then(todo =>
                Object.assign(this, todo));

            }
delete (){
    return db.none('DELETE FROM water WHERE id = $1', this.id);
}
        }


module.exports = user;