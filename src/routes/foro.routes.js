import { Router } from "express";
import { ctrlGetPublicaciones, ctrlCreatePublicacion, ctrlUpdatePublicacion, ctrlDeletePublicacion, ctrlGetPublicacionById, ctrlViewPublicaciones } from "../controllers/foro.controllers.js";
import { validate } from "../middlewares/validacion.js";
import { createPublicacionSchema, editPublicacionSchema } from "../schemas/publicaciones.schema.js";

const router = Router();

router.get('/', ctrlViewPublicaciones);

router.get('/api/publicaciones', ctrlGetPublicaciones);

router.post('/api/publicaciones', createPublicacionSchema, validate, ctrlCreatePublicacion);

router.get('/api/publicaciones/:id', ctrlGetPublicacionById);

router.put('/api/publicaciones/:id', editPublicacionSchema, validate, ctrlUpdatePublicacion);

router.delete('/api/publicaciones/:id', ctrlDeletePublicacion);

export default router;