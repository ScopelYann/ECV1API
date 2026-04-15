import { type NextFunction, type Request, type Response } from "express";
import { PlantService } from "../services/plant.service";
import { StatusCode } from "status-code-enum";

class PlantController {
    async indexAll(req: Request, res: Response, _next: NextFunction) {
        const service = new PlantService();
        const page = Number(req.params.page) || 1;

        try {
            const plants = await service.getAll(page);

            return res.status(StatusCode.SuccessOK).json(plants);
        } catch (error) {
            console.error("CONTROLLER ERROR:", error);

            return res.status(StatusCode.ServerErrorInternal).json({
                message: "Error while trying to get plants",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }

    async indexFamily(req: Request, res: Response, _next: NextFunction) {
        const service = new PlantService();
        const page = Number(req.params.page) || 1;
        const family = req.params.family;

        try {
            if (!family) {
                return res.status(StatusCode.ClientErrorBadRequest).json({
                    message: "Family parameter is required"
                });
            }

            const filterPlants = await service.getByFamily(family, page);

            return res.status(StatusCode.SuccessOK).json(filterPlants);
        } catch (error) {
            console.error("CONTROLLER ERROR:", error);

            return res.status(StatusCode.ServerErrorInternal).json({
                message: "Error while trying to get plants by family",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
}

export default new PlantController();