/* eslint-disable no-undef */
import { Router } from 'express';
import axios from 'axios';
import { parse } from 'node-html-parser';

const route = Router();

const PAGE_ULR = 'https://letterboxd.com/';

interface Review {
  author: string;
  film: string;
  review: string;
  timestamp: Date;
}

route.get('/', async (req, res) => {
  const query = req.query.film ? String(req.query.film) : false;

  const { data } = await axios.get(PAGE_ULR);
  const root = parse(data);
  const reviewList = root.querySelectorAll('.film-detail');

  const filmsReview: Review[] = [];

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

export default route;
