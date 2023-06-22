const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //** Connect to database */
        this.database();

        //** Path for router */
        this.path = {
            transaction: '/api/transaction',
        }

        //** Middleware */
        this.middleware();

        //** Routes for application */
        this.routes();
    }

    async database() {
        await dbConnection()
    }

    middleware() {
        //** Cors */
        this.app.use(cors())

        //** Reading and parsing */
        this.app.use(express.json());

        //** Public directory */
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.path.transaction, require('../routes/transaction'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVER LISTEN IN PORT`, this.port)
        })
    }
}

module.exports = Server