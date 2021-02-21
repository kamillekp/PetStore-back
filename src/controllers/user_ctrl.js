const connection = require('../dataBase/dbConnection');
const crypto = require ('crypto');

module.exports = {
    async store (req, res) {
        try {
            const {name, email, password} = req.body;
            const id = crypto.randomBytes(5).toString('HEX');

            await connection('user').insert({
                id: id, name, email, password
            });

            return res.status(201).json('OK');
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async indexAll (req, res) {
        try {
            const {id} = req.params;

            const response = await connection.select().from('user');

            return res.status(200).json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async index (req, res) {
        try {
            const {id} = req.params;
            const response = await connection.select().from('user').where({id:id});
            return res.status(200).json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async destroy (req, res) {
        try {
            const {id} = req.params;

            const response = await connection.delete().from('user').where({id:id});

            return res.status(200).json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },
}