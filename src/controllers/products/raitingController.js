const Ratings = require("../../models").Ratings;
const db = require('../../models');
raitingController = {};

function Raiting(idProducts) {
    return `SELECT  CAST((AVG(ratings.rating)) AS DECIMAL(16,2)) as raiting
    FROM ratings WHERE ratings.id_products = ${idProducts}`
}

raitingController.getRaiting = async (req, res) => {
    const id =  req.params.idProduct
    const query = Raiting(id);
    const data = [];
    try {
        let resultRaiting = await db.sequelize.query(query);
        resultRaiting[0].filter(el => {
            const calificacion = parseFloat(el.raiting) ;
            data.push({
                raiting : calificacion
            })
        })
        
        return res.status(200).json({
            data: data[0].raiting,
            message: 'Datos obtenidos correctamente'
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

raitingController.post = async (req, res) => {
    const { id_product, rating } = req.body;
    try {
        await Ratings.create({ id_product, rating });
        return res.status(200).json({
            message: 'Calificacion Guardada Exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}


module.exports = raitingController;
