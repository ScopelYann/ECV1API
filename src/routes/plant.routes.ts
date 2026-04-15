import { Router } from "express";
import plantController from "../controllers/plant.controller";


export const routes = Router();

routes.get("/get_plant/:page", (req, res, next) => {
    return plantController.indexAll(req, res, next);
});


routes.get("/get_family/:family", (req, res, next) => {
    return plantController.indexFamily(req, res, next)
})