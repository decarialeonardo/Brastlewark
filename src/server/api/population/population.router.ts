import { Router } from 'express';

import { 
    getPopulation
 } from './population.controller';

const populationRouter: Router = Router();

populationRouter.get('/', getPopulation);

export default populationRouter;
