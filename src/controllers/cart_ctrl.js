const nodemailer = require("nodemailer");
const strEmail = require('../mail template/cart');

module.exports = {

    cart(req, res) {
        const {name, email, total} = req.body;
        const mail = strEmail.cartEmail(name, total);
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            ignoreTLS: false,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "getpetcc@gmail.com", 
              pass: "getpet1123" 
            },
            tls:{ rejectUnauthorized: false} //localhost
        });
        let info = transporter.sendMail({
            from: '"PetStore 🐶🐭" <getpetcc@gmail.com>',
            to: `${email}, larachernandes@gmail.com, getpetcc@gmail.com`,
            subject: `Resumo da compra em PetStore`,
            text: "Resumo da compra em PetStore", 
            html: `${mail}`, // salvo em src/mail templates
        });
        res.send("ok")
    }
}