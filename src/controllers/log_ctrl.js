const connection = require('../dataBase/dbConnection');
const jwt = require('jsonwebtoken');
const SECRET = 'qwerdf1234567';

module.exports= {
    async storeLogin (req, res) {
        try {
            const {email, password} = req.body;
            const [user] = await connection('user').select('id', 'password').where({email:email});

            if(user.password == password) {
                const token = jwt.sign({idUser: user.id}, SECRET);
                return res.status(200).json({token, auth:true, id: user.id});
            }
        }
        catch (err) {
            return res.status(400).send(err);
        }
    }, 

    async verifyToken (req, res, next) {
        const {id} = req.params;
        var a = JSON.stringify(id);
        const token = a.substring(1, a.length-1);
            
        jwt.verify(token, SECRET, (err, decoded) => {
            if(err) return res.status(401).send(err);
            req.idUser = decoded.idUser;
            next();
        })
    }
}