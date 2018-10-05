import { NextFunction, Request, Response } from 'express';
import { PopulationService } from './population.service';
import { decorateError } from '../../shared/decorators/error-decorator';

const populationService = new PopulationService();

export async function getPopulation(req: Request, res: Response, next: NextFunction) {
	try {
		const response = await populationService.getPopulation();
		return res.json(response.data);
	} catch(err) {
		next(new Error(`status:${decorateError(err).status} msg:${decorateError(err).message}`));
	}
}