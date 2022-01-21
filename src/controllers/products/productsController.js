const Product = require('../../models').Products;
const Multimedia = require('../../models').Multimedia;
const { getPagination, getPagingData } = require('../../utils/paginate');
productsController = {};


productsController.get = async (req, res) => {
    try {
        console.log(req.query.page);
        let { limit, offset } = getPagination(req.query.page, req.query.size)

        let result = await Product.findAndCountAll({
            attributes: ['id', 'name', 'description', 'price'],
            include: [{
                model: Multimedia,
                as: 'Multimedia',
                attributes: ['path'],
                required: false
            }],
            offset,
            limit
        })

        let data = getPagingData(result, req.query.page, limit)

        return res.status(200).json({
            data,
            message: 'successful products'
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

productsController.post = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        await Product.create({
            name,
            description,
            price
        });
        return res.status(200).json({
            message: 'successfully created product'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

productsController.update = async (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;
    try {
        await Product.update({
            name,
            description,
            price
        }, {
            where: {
                id
            }
        });
        return res.status(200).json({
            message: 'product successfully updated'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

productsController.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({
            message: 'product successfully removed'
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}


module.exports = productsController;
