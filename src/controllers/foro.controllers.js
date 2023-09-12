import {Publicacion} from "../models/publicaciones.js";

export const ctrlViewPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        res.render('index.ejs',{publicaciones})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};


export const ctrlGetPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        if (!publicaciones) {
            return res.status(404).json({
                msg: 'No se encontraron publicaciones'
            });
        }
        res.status(200).json({
            data: publicaciones
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};

export const ctrlCreatePublicacion = async (req, res) => {
    try {
        const {titulo, descripcion, img} = req.body;
        const newPublicacion = await Publicacion.create({
            titulo,
            descripcion,
            img
        }, {
            fields: ['titulo', 'descripcion', 'img']
        });
        if (newPublicacion) {
            return res.status(201).json({
                msg: 'Publicacion creada correctamente',
                data: newPublicacion
            });
        }
        return res.status(400).json({
            msg: 'No se pudo crear la publicacion'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};

export const ctrlUpdatePublicacion = async (req, res) => {
    try {
        const {id} = req.params;
        const {titulo, descripcion, img} = req.body;
        const publicacion = await Publicacion.findOne({
            where: {
                id
            }
        });
        if (publicacion) {
            await publicacion.update({
                titulo,
                descripcion,
                img
            });
            return res.status(200).json({
                msg: 'Publicacion actualizada correctamente',
                data: publicacion
            });
        }
        return res.status(404).json({
            msg: 'Publicacion no encontrada'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};

export const ctrlDeletePublicacion = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteRowCount = await Publicacion.destroy({
            where: {
                id
            }
        });
        if (deleteRowCount > 0) {
            return res.status(200).json({
                msg: 'Publicacion eliminada correctamente'
            });
        }
        return res.status(404).json({
            msg: 'Publicacion no encontrada'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};

export const ctrlGetPublicacionById = async (req, res) => {
    try {
        const {id} = req.params;
        const publicacion = await Publicacion.findOne({
            where: {
                id
            }
        });
        if (publicacion) {
            return res.status(200).json({
                data: publicacion
            });
        }
        return res.status(404).json({
            msg: 'Publicacion no encontrada'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};