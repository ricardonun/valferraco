const express = require('express');
const routes = express.Router();
const ProductsController = require('./controllers/ProductsControllers');
const UsersController = require('./controllers/UsersControllers')

routes.get('/', (req, res) => {
    return res.json({ 
        Funcionando: 'Online'
    })
})
//Rotas Produtos
routes.post('/products', ProductsController.store);
routes.put('/products/:id', ProductsController.update)
routes.delete('/products/:id', ProductsController.delete)
routes.get('/products', ProductsController.get);
routes.get('/products/:id', ProductsController.show)
routes.get('/products/cat/:category', ProductsController.showByCat)

//Rotas Usuarios
routes.post('/users', UsersController.store);
routes.get('/users', UsersController.get);

module.exports = routes; 