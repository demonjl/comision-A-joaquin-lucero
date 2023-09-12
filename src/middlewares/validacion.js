import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            msg: 'Error de validacion',
            errors: errors.array()
        });
    }
    next();
}