import { Router } from 'express';

import reviews from './reviews';
import artists from './artists';

const routes = Router();

routes.use('/100-artists', artists);
routes.use('/popular-reviews', reviews);

export default routes;
