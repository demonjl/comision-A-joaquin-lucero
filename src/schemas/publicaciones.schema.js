import { body } from "express-validator";

export const createPublicacionSchema = [
    body('titulo')
        .isString().withMessage('El campo titulo debe ser string')
        .notEmpty().withMessage('El campo titulo no debe ser vacio'),
    body('descripcion')
        .isString().withMessage('El campo descripcion debe ser string')
        .notEmpty().withMessage('El campo descripcion no debe ser vacio'),
    body('img')
        .isURL().withMessage('Ingrese una url valida para la imagen')
        .notEmpty().withMessage('El campo imagen no debe ser vacio'),
]

export const editPublicacionSchema = [
    body('titulo')
        .optional()
        .isString().withMessage('El campo titulo debe ser string')
        .notEmpty().withMessage('El campo titulo no debe ser vacio'),
    body('descripcion')
        .optional()
        .isString().withMessage('El campo descripcion debe ser string')
        .notEmpty().withMessage('El campo descripcion no debe ser vacio'),
    body('img')
        .optional()
        .isURL().withMessage('Ingrese una url valida para la imagen')
        .notEmpty().withMessage('El campo imagen no debe ser vacio'),
]