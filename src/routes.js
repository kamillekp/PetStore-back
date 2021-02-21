const express = require('express');
const routes = express.Router();

//IMPORTAÇÃO DAS CONTROLLERS
const products_ctrl = require('./controllers/products_crtl');
const log_ctrl = require('./controllers/log_ctrl');
const user_ctrl = require('./controllers/user_ctrl');
const cart_ctrl = require('./controllers/cart_ctrl');

//ROTA RAIZ
routes.get('/', (req, res) => {
    return res.json('Tela inicial');
});

//ROTAS LOG
routes.post('/session', log_ctrl.storeLogin);

//ROTAS DO PRODUTO
routes.post('/products', products_ctrl.store);
routes.get('/products', products_ctrl.indexAll);
routes.get('/products/:id', products_ctrl.index);
routes.get('/products/category/:category', products_ctrl.indexCategory);
routes.get('/products/highlights/list', products_ctrl.indexHighlight);

routes.get('/products/category/:category/:title', products_ctrl.indexTitle);

//ROTAS DO USUÁRIO
routes.post('/user', user_ctrl.store);
routes.get('/user', user_ctrl.indexAll);
routes.get('/user/:id', user_ctrl.index); //Usei só indexAll porque não tem dados relevantes pra pegar de um user específico, só se atribuírmos compras a eles.
routes.delete('/user/:id', user_ctrl.destroy); //Caso ele queira excluir a conta

//ROTA ENVIO DE EMAIL DO CARRINHO
routes.post('/cart', cart_ctrl.cart)

module.exports = routes;