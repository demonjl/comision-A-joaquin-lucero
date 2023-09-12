import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js";

export const Publicacion = sequelize.define('publicaciones', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: true
});
