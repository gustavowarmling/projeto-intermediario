const express = require("express");

const reviews = require('./reviews');
const artists = require ('./artists');

const routes = express.Router();

routes.use('/100-artists', artists);
routes.use('/popular-reviews', reviews);

module.exports = routes;
