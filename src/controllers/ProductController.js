const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  //rota de listagem de todos os arquivos 
  async index(req, res) {
    const { page = 1} = req.query;
    const products = await Product.paginate({}, { page, limit: 8 });

    return res.json(products);
  },

  //rota que lista um único item através do id que foi passado
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  //rota de criação de novos produtos
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  //rota para pegar um único produto e atualizar o mesmo
  async update(req, res) {
    //necessario colocar o "new:true"" para ele atualizar a informação antes dela retornar para a const product
    //primeiro vc passa o id por param, depois ele pega os itens do body e altera
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send({ "message": "Product has been deleted!" });
  },
};
