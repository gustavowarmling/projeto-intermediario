/* eslint-disable no-undef */
const express = require("express");
const axios = require('axios').default;
const parse = require('node-html-parser').parse;

const route = express.Router();

const PAGE_ULR = 'https://letterboxd.com/';

route.get('/', async (req, res) => {
  const query = req.query.film ? String(req.query.film) : false;

  const { data } = await axios.get(PAGE_ULR);
  const root = parse(data);
  const reviewList = root.querySelectorAll('.film-detail');

  const filmsReview = [];

  reviewList.map(film => {
    const title = film.querySelector('.film-detail-content h2 a').innerHTML;
    const author = film.querySelector('.attribution-block p strong a')
      .innerHTML;
    const review = film.querySelector('.body-text p').innerHTML;

    const filmData = {
      author,
      film: title,
      review,
      timestamp: new Date(),
    };

    if (!query) {
      filmsReview.push(filmData);
    } else if (filmData.film.toUpperCase().includes(query.toUpperCase())) {
      filmsReview.push(filmData);
    }

    return null;
  });

  res.json(filmsReview);
});

module.exports = route;
