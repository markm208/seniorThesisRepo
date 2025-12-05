const sqlite3 = require('sqlite3'); 
 
class DBAbstraction { 
    constructor(fileName) { 
        this.fileName = fileName; 
    } //constructor

    init() { 
        return new Promise((resolve, reject) => { 
            this.db = new sqlite3.Database(this.fileName, (err) => { 
                if(err) { 
                    reject(err); 
                } else { 
                    resolve(); 
                } 
            }); 
        }); 
    } //init function

    getProducts() {
        const sql = 'SELECT * FROM Products';
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    } //getProducts function

} //class
 
module.exports = DBAbstraction;