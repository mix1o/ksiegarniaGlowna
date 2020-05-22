const db = require('lib/db');



const getUserByEmailAndPassword = (email, password) => db.query('SELECT * FROM clients WHERE email=? AND password=?', [email, password])
.then(([results,fields]) => {
    if(results.length > 0){
        return results[0];
    }
    throw new Error('user not found');
});

module.exports = {
    getUserByEmailAndPassword,
}
