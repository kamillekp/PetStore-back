const connection = require('../dataBase/dbConnection');
const crypto = require ('crypto');

module.exports= {

    async store(req, res){
        try {
            const {name, description, category, price, highlights, discount} = req.body;
            const id = crypto.randomBytes(5).toString('HEX');

            await connection('products').insert({
                id: id, name, description, category, price, highlights, discount
            });
            return res.status(201).json('OK');
        }
        catch(err) {
            return res.status(400).send(err)
        }
    },

    async indexAll(req, res){
        try {
            const response = await connection.select().from('products');
            return res.json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async index(req, res){
        try {
            const {id} = req.params; 

            const [response] = await connection.select().from('products').where({id:id});
            return res.json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async indexCategory(req, res){
        try {
            const {category} = req.params;
            const response = await connection.select().from('products').where({category: category});
            return res.json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async indexHighlight(req, res){
        try {
            const response = await connection.select().from('products').where({highlight: true});
            return res.json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },

    async indexTitle(req, res){
        try {
            const {category, title} = req.params; 
            console.log(category, title);

            const [response] = await connection.select().from('products').where({category:category, name:title});

            return res.json(response);
        }
        catch(err) {
            return res.status(400).send(err);
        }
    },
}