const Multimedia = require('../../models').Multimedia;
const fs = require('fs');
const path = require('path');
mediaController = {};


const img = async (req, res) => {
    const file = req.files.file;
    const namefile = file.name.split('.');
    const extencion = namefile[namefile.length - 1];
    const name_end = `${new Date().getMilliseconds()}.${extencion}`;
    file.mv(`src/uploads/products/${name_end}`, (error) => {
        if (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    });
    return `/products/${name_end}`
}

const deleteimg = (img) =>{
    const imgpath = path.resolve(__dirname, `../../uploads/${img}`);
    console.log(imgpath);
    if (fs.existsSync(imgpath)) {
        fs.unlinkSync(imgpath);
    }
}

mediaController.get = async (req, res) => {
    const id_products = req.params.id;
    try {
        let data = await Multimedia.findAll({
            where: {
                id_products
            }
        });
        return res.status(200).json({
            data,
            message: 'successful media'
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

mediaController.post = async (req, res) => {
    const { id_products } = req.body;
    try {
        const name = await img(req, res);
        await Multimedia.create({
            id_products,
            path: name
        });

        return res.status(200).json({
            message: 'successfully created media'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

mediaController.delete = async (req, res) => {
    const { id_products, path } = req.body;
    deleteimg(path);
    try {
        await Multimedia.destroy({
            where: {
                id_products,
                path
            }
        });

        return res.status(200).json({
            message: 'media successfully removed'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}


module.exports = mediaController;
